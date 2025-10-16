import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jobs in Canada with Visa Sponsorship 2025 | Work Permit & Express Entry',
  description: 'Find jobs in Canada for foreigners with visa sponsorship. Immediate openings for nanny jobs, driver jobs, cleaner jobs. Easy Canada work permit application & express entry. Apply today!',
  keywords: [
    // High-Value Job Keywords
    'jobs in canada for foreigners with visa sponsorship',
    'visa sponsorship jobs in canada for foreigners',
    'canada jobs for foreigners with visa sponsorship',
    'job opportunities in canada with visa sponsorship',
    // Specific Job Types
    'nanny jobs in canada',
    'driver jobs in canada',
    'cleaner jobs in canada',
    'entry level jobs in canada',
    'skilled worker jobs in canada',
    // Immigration Keywords
    'canada work permit',
    'express entry canada',
    'canada immigration visa',
    'canada visa work visa',
    'student visa canada',
    // Job Search Keywords
    'jobs hiring near me',
    'job openings near me',
    'jobs available near me',
    'canada job vacancy',
    'job opportunities in canada'
  ],
  openGraph: {
    title: 'Jobs in Canada with Visa Sponsorship 2025 | Work Permit & Express Entry',
    description: 'Find jobs in Canada for foreigners with visa sponsorship. Immediate openings for nanny jobs, driver jobs, cleaner jobs. Easy Canada work permit application & express entry.',
    type: 'website',
    url: 'https://globaldigitalexperts.info/jobs',
  }
}

const jobCategories = [
  {
    title: 'Nanny Jobs in Canada with Visa Sponsorship',
    description: 'Find nanny and caregiver positions with visa sponsorship. Immediate openings for foreigners with work permit assistance.',
    salary: '$30,000 - $45,000/year',
    requirements: ['Basic English proficiency', 'Childcare experience preferred', 'Clean background check', 'Work permit sponsorship provided'],
    url: '/jobs/nanny-jobs-canada',
    keywords: ['nanny jobs', 'caregiver jobs', 'childcare work in canada']
  },
  {
    title: 'Driver Jobs in Canada for Foreigners',
    description: 'Immediate openings for delivery, taxi, and commercial driving positions with work permit sponsorship for foreigners.',
    salary: '$35,000 - $65,000/year',
    requirements: ['Valid driver\'s license', 'Clean driving record', 'English communication skills', 'Visa sponsorship available'],
    url: '/jobs/driver-jobs-canada',
    keywords: ['driver jobs', 'delivery jobs', 'transport jobs canada']
  },
  {
    title: 'Cleaner Jobs in Canada with Work Permit',
    description: 'Housekeeping and commercial cleaning positions with visa sponsorship. No experience needed, training provided.',
    salary: '$28,000 - $40,000/year',
    requirements: ['No experience required', 'Full training provided', 'Work permit assistance included', 'Immediate start available'],
    url: '/jobs/cleaner-jobs-canada',
    keywords: ['cleaning jobs', 'housekeeping jobs', 'janitorial work canada']
  },
  {
    title: 'Entry Level Jobs in Canada for Foreigners',
    description: 'Start your career in Canada with entry-level positions. Visa sponsorship and work permit support provided.',
    salary: '$30,000 - $45,000/year',
    requirements: ['No experience needed', 'Training available', 'Work visa sponsorship', 'Entry-level opportunities'],
    url: '/jobs/entry-level-jobs-canada',
    keywords: ['entry level work', 'starter jobs', 'beginner jobs canada']
  },
  {
    title: 'Skilled Worker Jobs through Express Entry Canada',
    description: 'Professional opportunities through Express Entry system. Fast-track your Canadian immigration.',
    salary: '$45,000 - $90,000/year',
    requirements: ['Relevant qualifications', 'Work experience', 'Express Entry eligible', 'Skilled worker program'],
    url: '/jobs/skilled-worker-jobs-canada',
    keywords: ['skilled jobs', 'professional work', 'express entry jobs']
  }
]

export default function JobCategories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Jobs in Canada with Visa Sponsorship 2025</h1>
        <p className="text-xl text-gray-600">
          Find immediate job openings in Canada for foreigners with visa sponsorship and work permit support.
        </p>
      </header>
      
      {/* Immigration Quick Links */}
      <section className="bg-blue-50 p-6 rounded-lg mb-8" aria-label="Immigration Resources">
        <h2 className="text-xl font-semibold mb-4">Quick Immigration Links</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/visa/work-permit" className="text-blue-600 hover:underline">
            Canada Work Permit Guide
          </Link>
          <Link href="/visa/express-entry" className="text-blue-600 hover:underline">
            Express Entry Program
          </Link>
          <Link href="/visa/student-visa" className="text-blue-600 hover:underline">
            Student Visa Application
          </Link>
        </div>
      </section>

      {/* Job Categories */}
      <section className="mb-12" aria-label="Job Categories">
        <h2 className="text-2xl font-bold mb-6">Latest Job Opportunities in Canada</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {jobCategories.map((category) => (
            <article key={category.title} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="mb-4">
                <strong className="text-green-600">Salary Range:</strong>
                <span className="ml-2">{category.salary}</span>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc pl-5">
                  {category.requirements.map((req) => (
                    <li key={req} className="text-gray-600">{req}</li>
                  ))}
                </ul>
              </div>
              <Link 
                href={category.url}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply Now - Visa Sponsorship Available
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="prose max-w-none" aria-label="Additional Information">
        <h2>Work in Canada with Visa Sponsorship - Complete Guide</h2>
        <p>
          Looking for job opportunities in Canada for foreigners? Our comprehensive job board features positions 
          with visa sponsorship across various industries. Whether you're seeking nanny jobs, 
          driver positions, cleaning work, or skilled professional roles through Express Entry Canada, 
          we connect you with Canadian employers offering work permits and immigration support.
        </p>

        <h3>Why Choose Canada for Employment in 2025?</h3>
        <ul>
          <li>Competitive salaries with comprehensive benefits packages</li>
          <li>Free healthcare and high quality of life</li>
          <li>Diverse, multicultural work environment</li>
          <li>Clear path to permanent residence through Express Entry</li>
          <li>Family sponsorship opportunities available</li>
          <li>Job opportunities in Canada for foreigners in all sectors</li>
        </ul>

        <h3>Canada Immigration Pathways 2025</h3>
        <p>
          Canada offers multiple immigration pathways for foreign workers. The Express Entry system provides 
          fast-track processing for skilled workers, while specific work permits cater to various job categories. 
          Student visa holders can transition to work through post-graduation work permits, and there are 
          special programs for entry-level positions with visa sponsorship.
        </p>

        <h3>Employment Opportunities Across Canada</h3>
        <p>
          Find jobs hiring near me in major Canadian cities. Whether you're looking for entry-level positions 
          or skilled worker opportunities, our job listings include immediate openings with work permit sponsorship. 
          Apply today and start your journey to living and working in Canada.
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Start Your Canadian Journey Today</h2>
        <p className="mb-6">
          Browse current job openings with visa sponsorship and work permit support. 
          Immediate positions available for foreigners in various sectors.
        </p>
        <Link 
          href="/apply"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Search Jobs with Visa Sponsorship
        </Link>
      </section>
    </div>
  )
}
