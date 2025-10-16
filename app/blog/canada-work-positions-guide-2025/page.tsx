import type { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'High-Paying Work Positions in Canada 2025 | Salary Guide & Visa Sponsorship',
  description: 'Complete guide to in-demand jobs in Canada with visa sponsorship. Welding ($6,066/month), Security ($2,600/month), Housekeeping ($2,800/month). Updated salary information and requirements for 2025.',
  keywords: 'work positions Canada 2025, jobs in Canada with visa sponsorship, high paying jobs Canada, welding jobs Canada, security jobs Canada, housekeeping jobs Canada, Canada work permit 2025, Canada immigration jobs',
  openGraph: {
    title: 'High-Paying Work Positions in Canada 2025 | Complete Salary Guide',
    description: 'Find lucrative job opportunities in Canada with visa sponsorship. Updated salary information and requirements for 2025.',
    type: 'article',
    publishedTime: '2025-01-26T00:00:00.000Z',
    authors: ['Global Digital Experts'],
    tags: ['Canada Jobs', 'Work Positions', 'Visa Sponsorship', 'High Paying Jobs', 'Immigration']
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "High-Paying Work Positions in Canada 2025: Complete Guide with Visa Sponsorship",
  "datePublished": "2025-01-26T00:00:00.000Z",
  "dateModified": "2025-01-26T00:00:00.000Z",
  "author": {
    "@type": "Organization",
    "name": "Global Digital Experts"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Global Digital Experts",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yoursite.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yoursite.com/blog/canada-work-positions-guide-2025"
  },
  "description": "Complete guide to in-demand jobs in Canada with visa sponsorship. Latest salary information and requirements for 2025.",
  "keywords": "work positions Canada 2025, jobs Canada visa sponsorship, high paying jobs Canada"
}

export default function WorkPositionsGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">Work Positions</span>
          <time className="text-gray-500">Updated: January 26, 2025</time>
          <span className="text-gray-500">15 min read</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">High-Paying Work Positions in Canada 2025: Complete Guide</h1>
        <p className="text-xl text-gray-600">
          Discover lucrative job opportunities in Canada with visa sponsorship. 
          Updated salary information, requirements, and application process for various positions.
        </p>

        {/* Quick Navigation */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="#welding" className="text-blue-600 hover:underline">→ Welding Positions</Link>
            <Link href="#security" className="text-blue-600 hover:underline">→ Security Jobs</Link>
            <Link href="#housekeeping" className="text-blue-600 hover:underline">→ Housekeeping Roles</Link>
            <Link href="#visa" className="text-blue-600 hover:underline">→ Visa Requirements</Link>
          </div>
        </div>
      </header>

      {/* Key Statistics */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-bold text-lg mb-2">Average Salary Range</h3>
          <p className="text-3xl font-bold text-green-600">$2.6K-$6.9K</p>
          <p className="text-sm text-gray-600">Monthly in CAD</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-bold text-lg mb-2">Visa Success Rate</h3>
          <p className="text-3xl font-bold text-green-600">85%</p>
          <p className="text-sm text-gray-600">For sponsored positions</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-bold text-lg mb-2">Processing Time</h3>
          <p className="text-3xl font-bold text-green-600">2-4</p>
          <p className="text-sm text-gray-600">Months average</p>
        </div>
      </div>

      {/* Main Content */}
      <article className="prose lg:prose-xl">
        <section id="welding">
          <h2>Welding Positions in Canada</h2>
          
          <div className="not-prose">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Certified Welder</h3>
                <div className="flex items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">$6,066 CAD/month</span>
                  <span className="ml-4 bg-green-100 text-green-800 text-sm px-2 py-1 rounded">High Demand</span>
                </div>
                <p className="text-gray-600 mb-4">
                  High-demand welding positions across Canada with excellent benefits and overtime opportunities.
                </p>
                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-bold mb-2">Requirements</h4>
                  <ul className="list-disc pl-5">
                    <li>Welding Certification</li>
                    <li>2+ years experience</li>
                    <li>Safety training certificates</li>
                    <li>Basic English proficiency</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold mb-2">Top Hiring Provinces</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Alberta</p>
                      <p className="text-sm text-gray-600">5,000+ openings</p>
                    </div>
                    <div>
                      <p className="font-semibold">Ontario</p>
                      <p className="text-sm text-gray-600">3,500+ openings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="security">
          <h2>Security Positions</h2>
          
          <div className="not-prose">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Security Officer</h3>
                <div className="flex items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">$2,600 CAD/month</span>
                  <span className="ml-4 bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Entry Level</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Entry-level security positions with opportunities for advancement and certification.
                </p>
                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-bold mb-2">Requirements</h4>
                  <ul className="list-disc pl-5">
                    <li>Security License</li>
                    <li>Clean criminal record</li>
                    <li>First Aid certification</li>
                    <li>Good communication skills</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="housekeeping">
          <h2>Housekeeping Opportunities</h2>
          
          <div className="not-prose">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Hotel Housekeeper</h3>
                <div className="flex items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">$2,800 CAD/month</span>
                  <span className="ml-4 bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Benefits Included</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Housekeeping positions in luxury hotels with comprehensive benefits and growth opportunities.
                </p>
                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-bold mb-2">Benefits Package</h4>
                  <ul className="list-disc pl-5">
                    <li>Health insurance</li>
                    <li>Paid vacation</li>
                    <li>Staff accommodation available</li>
                    <li>Performance bonuses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="visa" className="mt-8">
          <h2>Visa and Immigration Process</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Required Documents</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Valid passport</li>
              <li>Job offer letter</li>
              <li>LMIA approval</li>
              <li>Work experience letters</li>
              <li>Educational certificates</li>
              <li>Police clearance</li>
              <li>Medical examination</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Application Timeline</h3>
              <div className="bg-gray-50 p-4 rounded">
                <ul className="space-y-3">
                  <li><span className="font-semibold">LMIA Processing:</span> 4-6 weeks</li>
                  <li><span className="font-semibold">Work Permit Processing:</span> 4-8 weeks</li>
                  <li><span className="font-semibold">Visa Processing:</span> 2-4 weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <div className="my-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Success Story: From Mombasa to Vancouver</h3>
          <blockquote className="italic">
            "I started as a welder in Mombasa and now work for a major construction company in Vancouver. 
            The salary is excellent, and the company helped with my entire immigration process. 
            My family joined me after 6 months."
            <footer className="mt-2 font-semibold">- James M., Certified Welder</footer>
          </blockquote>
        </div>
      </article>

      {/* Call to Action */}
      <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Canadian Career?</h2>
        <p className="text-lg mb-6">Get personalized guidance on finding the right position and immigration process</p>
        <Button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
          Apply Now
        </Button>
      </div>

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">Do these positions include visa sponsorship?</h3>
            <p className="text-gray-600">Yes, all listed positions include full visa sponsorship and work permit assistance for qualified candidates.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">What is the average processing time?</h3>
            <p className="text-gray-600">The complete process typically takes 2-4 months from job offer to arrival in Canada.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">Can I bring my family?</h3>
            <p className="text-gray-600">Yes, once you have your work permit, you can apply for family sponsorship.</p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/healthcare-jobs-canada-kenyans-2025" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="font-bold mb-2">Healthcare Jobs in Canada</h4>
            <p className="text-gray-600">Explore opportunities in the healthcare sector...</p>
          </Link>
          <Link href="/blog/canadian-work-permit-guide-2025" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="font-bold mb-2">Canadian Work Permit Guide</h4>
            <p className="text-gray-600">Step-by-step guide to obtaining your work permit...</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
