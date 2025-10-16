const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// List of all external images found in the codebase
const imageUrls = [
  // WorkPositions.tsx images
  'https://www.prepareforcanada.com/wp-content/uploads/Employees-wearing-protective-face-masks-while-welding.png',
  'https://media.licdn.com/dms/image/v2/D4D12AQE2CTGbvljUUg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1678557494126?e=2147483647&v=beta&t=b_lZcd2OepCCIJmDnBlRLR302vd337n0v-_zsVLeQ5o',
  'https://news-notes.ufhealth.org/files/2020/05/Security-Officers_JSJ_JJ102087-1923x1282.jpg',
  'https://media.istockphoto.com/id/496212390/photo/young-african-woman-gardening-with-her-husband.jpg?s=612x612&w=0&k=20&c=frIGj2Aaj7mXj3hvvkVy8l2xi_AUop1yyDwIkbydxpg=',
  'https://media.istockphoto.com/id/1280720323/photo/learning-your-kids-from-early-age-to-socialize-and-make-a-friendship-is-so-important.jpg?s=612x612&w=0&k=20&c=wUWSituU8i_jwxBXOlRWFM67jtwWaLo0Ew2UO9MAdBE=',
  'https://www.shutterstock.com/image-photo/african-american-chef-teaching-women-260nw-1080191051.jpg',
  'https://media.istockphoto.com/id/1194474300/photo/male-and-female-adult-students-looking-at-recipe-in-cookery-class-in-kitchen.jpg?s=612x612&w=0&k=20&c=dFeIthT4_zisjwAf7-uN7G_Z6_vzj96U6iMN6PVilhc=',
  'https://www.bpmcdn.com/f/files/alberni/import/2018-09/13442741_web1_180810-UWN-UHS-front.jpg',
  'https://www.shutterstock.com/image-photo/two-african-american-hotel-receptionists-260nw-2370716721.jpg',
  'https://media.istockphoto.com/id/1306107206/photo/portrait-of-smiling-couple-owning-bar-standing-behind-counter.jpg?s=612x612&w=0&k=20&c=TC1sDPkfnImx4_Jaygxn__1LQ-xOAPrgtwt-yj6VVSs=',
  'https://www.shutterstock.com/image-photo/portrait-happy-african-male-female-260nw-409903567.jpg',
  'https://smarthelperscenter.co.za/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-19-09.25.38-A-detailed-scene-of-an-office-during-a-deep-cleaning-session-focusing-on-the-carpet-steam-cleaning-process.-The-image-shows-a-professional-cleaner-a.webp',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpho4StbJ5pSLf0uoeU35lcasoRonNQQlpg&s',
  'https://www.shutterstock.com/image-photo/funny-caretaker-working-outdoors-on-260nw-77517631.jpg',
  'https://t3.ftcdn.net/jpg/09/76/61/88/360_F_976618853_qDnVR6slv2vyeOMKYg6xmwzxb8OT5Sf9.jpg',
  'https://www.mku.ac.ke/wp-content/uploads/2021/04/MKU-Laundry-and-Dry-Cleaner-image-1-1.jpg',
  'https://staffing-agency.co.uk/wp-content/uploads/2024/05/Professional-Hospitality-Staffing-Solutions.jpg',
  'https://www.dexerto.com/cdn-image/wp-content/uploads/2024/01/16/Twitch-Streamer-roasted-by-FanDuel-dealer.jpg',
  'https://img.freepik.com/premium-photo/two-african-american-hotel-receptionists-man-woman-assisting-with-booking-rooms-check-procedure-maintaining-front-desk-customer-service-hospitality-industry_482257-69995.jpg'
];

// Create public/images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to get file extension from URL
function getFileExtension(url) {
  const urlWithoutQuery = url.split('?')[0];
  const extension = path.extname(urlWithoutQuery);
  return extension || '.jpg'; // Default to .jpg if no extension found
}

// Function to generate safe filename
function generateSafeFilename(url, index) {
  const jobTitles = [
    'welder', 'housekeeper', 'security-guard', 'gardener', 'nanny', 
    'chef', 'kitchen-helper', 'fish-plant-worker', 'hotel-front-desk', 
    'bartender', 'light-duty-cleaner', 'specialized-cleaner', 'janitor', 
    'caretaker', 'plumber', 'dry-cleaning-worker', 'housekeeping-staff', 
    'casino-worker', 'receptionist'
  ];
  
  const title = jobTitles[index] || `job-${index + 1}`;
  const extension = getFileExtension(url);
  return `${title}${extension}`;
}

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    const protocol = url.startsWith('https:') ? https : http;
    
    const request = protocol.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, filename)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve(filename);
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // Delete the file on error
        reject(err);
      });
    });
    
    request.on('error', (err) => {
      reject(err);
    });
    
    // Set timeout
    request.setTimeout(30000, () => {
      request.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

// Main download function
async function downloadAllImages() {
  console.log('🚀 Starting image download process...\n');
  
  const results = [];
  
  for (let i = 0; i < imageUrls.length; i++) {
    const url = imageUrls[i];
    const filename = generateSafeFilename(url, i);
    
    try {
      console.log(`📥 Downloading ${i + 1}/${imageUrls.length}: ${filename}`);
      await downloadImage(url, filename);
      results.push({ url, filename, status: 'success' });
    } catch (error) {
      console.error(`❌ Failed to download ${filename}: ${error.message}`);
      results.push({ url, filename, status: 'failed', error: error.message });
    }
  }
  
  // Generate mapping file
  const mapping = {};
  results.forEach(result => {
    if (result.status === 'success') {
      mapping[result.url] = `/images/${result.filename}`;
    }
  });
  
  const mappingPath = path.join(__dirname, 'image-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  
  console.log('\n📊 Download Summary:');
  console.log(`✅ Successful: ${results.filter(r => r.status === 'success').length}`);
  console.log(`❌ Failed: ${results.filter(r => r.status === 'failed').length}`);
  console.log(`📄 Mapping saved to: ${mappingPath}`);
  
  return mapping;
}

// Run the download process
if (require.main === module) {
  downloadAllImages()
    .then(() => {
      console.log('\n🎉 Image download process completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Download process failed:', error);
      process.exit(1);
    });
}

module.exports = { downloadAllImages, generateSafeFilename };
