'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ApplicationModal from '../components/ApplicationModal'

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'government', name: 'Government Initiatives' },
  { id: 'high-paying', name: 'High-Paying Jobs' },
  { id: 'service', name: 'Service Industry' },
  { id: 'skilled-trades', name: 'Skilled Trades' },
  { id: 'hospitality', name: 'Hospitality' },
  { id: 'entry-level', name: 'Entry Level' },
  { id: 'work-permits', name: 'Work Permits' }
]

const blogPosts = [
  {
    id: 1,
    title: "Kenya-Canada Partnership 2025: New Employment Opportunities",
    slug: "kenya-canada-partnership-2025",
    excerpt: "Latest updates on Kenya-Canada bilateral agreements, employment partnerships, and immigration pathways. Official government initiatives and opportunities for Kenyan professionals.",
    date: "2025-01-26",
    readTime: "15 min read",
    category: "government",
    featured: true,
    image: "https://www.theeastafrican.co.ke/resource/image/4256964/landscape_ratio16x9/1600/900/766b435d5e6f6bf9e650dd5db052cf8d/aZ/dnstate.jpg"
  },
  {
    id: 2,
    title: "Service Industry Jobs in Canada 2025",
    slug: "service-jobs-canada-kenyans-2025",
    excerpt: "Complete guide to service industry jobs in Canada. Driver positions ($3,500/month), Chef roles ($4,200/month), Nanny jobs ($3,200/month), and Cleaning positions ($2,800/month). All with visa sponsorship.",
    date: "2025-01-26",
    readTime: "15 min read",
    category: "service",
    featured: false,
    image: "https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/TGBCMS/ltu0jyarhuo19jk54gkr0w.jpg"
  },
  {
    id: 3,
    title: "Professional Driver Jobs in Canada 2025",
    slug: "service-jobs-canada-kenyans-2025#driver",
    excerpt: "Start your driving career in Canada. Earn $3,500/month as a professional driver with full visa sponsorship. Positions include delivery, taxi, and private chauffeur services.",
    date: "2025-01-26",
    readTime: "10 min read",
    category: "service",
    featured: false,
    image: "https://media.istockphoto.com/id/1305640742/photo/african-american-man-driving-a-semi-truck.jpg?s=612x612&w=0&k=20&c=mthJq6QVeQTCfeLjJ8LgzRNxqYpkTpYSU7XvAPBuVkI="
  },
  {
    id: 4,
    title: "Chef & Cooking Jobs in Canada 2025",
    slug: "service-jobs-canada-kenyans-2025#chef",
    excerpt: "Launch your culinary career in Canada. Earn $4,200/month as a professional chef with visa sponsorship. Opportunities in restaurants, hotels, and catering services.",
    date: "2025-01-26",
    readTime: "10 min read",
    category: "service",
    featured: false,
    image: "https://jbf-media.s3.amazonaws.com/production/blog/2020/1/15/111518_JBF_DC_CarlaHall_256-opt.jpg"
  },
  {
    id: 5,
    title: "Nanny & Childcare Jobs in Canada 2025",
    slug: "service-jobs-canada-kenyans-2025#nanny",
    excerpt: "Begin your childcare career in Canada. Earn $3,200/month as a professional nanny with visa sponsorship. Live-in options available with excellent benefits.",
    date: "2025-01-26",
    readTime: "10 min read",
    category: "service",
    featured: false,
    image: "https://media.istockphoto.com/id/695445586/photo/woman-with-three-child-african-american-woman-with-three-child-prepare-for-easter.jpg?s=612x612&w=0&k=20&c=xEwchQZlkjuI59FSVX3R2uT50oUX4eID8I-uC-r1TSI="
  },
  {
    id: 6,
    title: "Cleaning & Housekeeping Jobs in Canada 2025",
    slug: "service-jobs-canada-kenyans-2025#cleaner",
    excerpt: "Start your housekeeping career in Canada. Earn $2,800/month with visa sponsorship. Positions in hotels, offices, and residential cleaning services.",
    date: "2025-01-26",
    readTime: "10 min read",
    category: "service",
    featured: false,
    image: "https://insights.workwave.com/wp-content/uploads/2019/07/iStock-906777508-e1564417323957.jpg"
  },
  {
    id: 7,
    title: "Highest-Paying Jobs in Canada for Kenyans 2025",
    slug: "highest-paying-jobs-canada-kenyans-2025",
    excerpt: "Discover top-paying jobs in Canada for Kenyans: plumbing ($6,933/month), electrical work ($6,933/month), welding ($6,066/month), and more. All positions include visa sponsorship.",
    date: "2025-01-26",
    readTime: "10 min read",
    category: "high-paying",
    featured: false,
    image: "https://t4.ftcdn.net/jpg/01/16/90/67/360_F_116906766_l5K1WwCz3kW8cmnpFApzIlU0gPHWjWsK.jpg"
  },
  {
    id: 8,
    title: "Entry Level Jobs in Canada 2025",
    slug: "entry-level-jobs-canada-kenyans-2025",
    excerpt: "Start your Canadian journey with these entry-level positions. Full training provided. Positions in housekeeping, hospitality, and more.",
    date: "2025-01-26",
    readTime: "10 min read",
    category: "entry-level",
    featured: false,
    image: "https://media.istockphoto.com/id/1194474300/photo/male-and-female-adult-students-looking-at-recipe-in-cookery-class-in-kitchen.jpg?s=612x612&w=0&k=20&c=dFeIthT4_zisjwAf7-uN7G_Z6_vzj96U6iMN6PVilhc="
  },
  {
    id: 9,
    title: "Complete Guide to Canadian Work Permits 2025",
    slug: "canadian-work-permit-guide-2025",
    excerpt: "Everything you need to know about obtaining a Canadian work permit. Updated processing times and step-by-step application guide.",
    date: "2025-01-26",
    readTime: "15 min read",
    category: "work-permits",
    featured: false,
    image: "https://media.istockphoto.com/id/1194474300/photo/male-and-female-adult-students-looking-at-recipe-in-cookery-class-in-kitchen.jpg?s=612x612&w=0&k=20&c=dFeIthT4_zisjwAf7-uN7G_Z6_vzj96U6iMN6PVilhc="
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [formStep, setFormStep] = useState(1)

  const handleModalClose = () => {
    setSelectedJob(null)
    setFormStep(1)
  }

  const handleModalOpen = () => {
    setSelectedJob("Job Application")
    setFormStep(1)
  }

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = filteredPosts.find(post => post.featured)

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Secure a Canadian Job Today</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find the latest high-paying jobs with visa sponsorship in Canada. 
          Updated weekly with immediate openings and step-by-step application guides.
        </p>
      </header>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:w-1/2">
            <Input 
              type="search" 
              placeholder="Search articles..." 
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        {featuredPost && (
          <div className="relative rounded-lg overflow-hidden">
            <div className="relative h-[400px] w-full">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded mb-2 inline-block">
                Featured
              </span>
              <h2 className="text-3xl font-bold text-white mb-2">{featuredPost.title}</h2>
              <p className="text-gray-200 mb-4">{featuredPost.excerpt}</p>
              <Link href={`/blog/${featuredPost.slug}`}>
                <Button variant="secondary">Read More</Button>
              </Link>
              <Button 
                onClick={handleModalOpen}
                className="bg-red-600 hover:bg-red-700 text-white transition-colors"
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Regular Posts Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredPosts.filter(post => !post.featured).map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {post.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                  {categories.find(cat => cat.id === post.category)?.name}
                </span>
                <span className="text-gray-500 text-sm ml-4">{post.date}</span>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.readTime}</span>
                <Button variant="outline" asChild>
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
                <Button 
                  onClick={handleModalOpen}
                  className="bg-red-600 hover:bg-red-700 text-white transition-colors"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Get Latest Job Opportunities</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to receive weekly updates on new job openings in Canada for Kenyans.
          Get early access to government initiatives and bilateral opportunities.
        </p>
        <div className="flex max-w-md mx-auto gap-4">
          <Input type="email" placeholder="Enter your email" className="flex-1" />
          <Button>Subscribe</Button>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-4">Popular Categories</h3>
          <ul className="space-y-2">
            {categories.slice(1).map(category => (
              <li key={category.id}>
                <button 
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-blue-600 hover:underline"
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-4">Latest Updates</h3>
          <ul className="space-y-2">
            <li>• New Kenya-Canada bilateral agreement</li>
            <li>• Tech sector visa fast-track program</li>
            <li>• Healthcare recruitment initiative</li>
            <li>• Updated salary ranges for 2025</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-4">Official Resources</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-blue-600 hover:underline">Kenya High Commission - Canada</Link></li>
            <li><Link href="#" className="text-blue-600 hover:underline">Immigration, Refugees and Citizenship Canada</Link></li>
            <li><Link href="#" className="text-blue-600 hover:underline">Job Bank Canada</Link></li>
          </ul>
        </div>
      </div>
      {selectedJob && (
        <ApplicationModal
          isOpen={!!selectedJob}
          onClose={handleModalClose}
          jobTitle={selectedJob}
          currentStep={formStep}
          onStepChange={setFormStep}
        />
      )}
    </div>
  )
}
