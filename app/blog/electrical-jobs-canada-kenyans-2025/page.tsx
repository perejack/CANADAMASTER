import type { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Electrical Jobs in Canada 2025 | $6,933/Month with Visa Sponsorship',
  description: 'High-paying electrical jobs in Canada for Kenyans. Earn up to $6,933/month with full visa sponsorship. Complete guide to certification, requirements, and immigration process for 2025.',
  keywords: 'electrical jobs Canada 2025, electrician salary Canada, Kenya electricians Canada, visa sponsorship electrical jobs, high paying jobs Canada, skilled trades Canada, electrical certification Canada',
  openGraph: {
    title: 'Electrical Jobs in Canada 2025 | High-Paying Opportunities',
    description: 'Find high-paying electrical jobs in Canada with visa sponsorship. Complete guide with salary information and certification requirements for 2025.',
    type: 'article',
    publishedTime: '2025-01-26T00:00:00.000Z',
    authors: ['Global Digital Experts'],
    tags: ['Electrical Jobs', 'Skilled Trades', 'Canada Immigration', 'High Paying Jobs']
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Electrical Jobs in Canada 2025: Complete Guide with Salary Information",
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
    "@id": "https://yoursite.com/blog/electrical-jobs-canada-kenyans-2025"
  },
  "description": "Complete guide to electrical jobs in Canada with visa sponsorship. Latest salary information and requirements for 2025.",
  "keywords": "electrical jobs Canada 2025, electrician salary Canada, visa sponsorship electrical"
}

export default function ElectricalJobs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">Skilled Trades</span>
          <time className="text-gray-500">Updated: January 26, 2025</time>
          <span className="text-gray-500">15 min read</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Electrical Jobs in Canada 2025: Complete Guide</h1>
        <p className="text-xl text-gray-600">
          Discover high-paying electrical positions in Canada with visa sponsorship. 
          Earn up to $6,933/month with excellent benefits and career advancement opportunities.
        </p>

        {/* Quick Navigation */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="#positions" className="text-blue-600 hover:underline">→ Job Positions</Link>
            <Link href="#certification" className="text-blue-600 hover:underline">→ Certification Process</Link>
            <Link href="#locations" className="text-blue-600 hover:underline">→ Top Locations</Link>
            <Link href="#visa" className="text-blue-600 hover:underline">→ Immigration Guide</Link>
          </div>
        </div>
      </header>

      {/* Key Statistics */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-bold text-lg mb-2">Monthly Salary</h3>
          <p className="text-3xl font-bold text-green-600">$6,933</p>
          <p className="text-sm text-gray-600">CAD per month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-bold text-lg mb-2">Available Positions</h3>
          <p className="text-3xl font-bold text-green-600">20,000+</p>
          <p className="text-sm text-gray-600">Nationwide</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-bold text-lg mb-2">Visa Success Rate</h3>
          <p className="text-3xl font-bold text-green-600">90%</p>
          <p className="text-sm text-gray-600">For qualified candidates</p>
        </div>
      </div>

      {/* Main Content */}
      <article className="prose lg:prose-xl">
        <section id="positions">
          <h2>Electrical Positions Available</h2>
          
          <div className="not-prose">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Licensed Electrician</h3>
                <div className="flex items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">$6,933 CAD/month</span>
                  <span className="ml-4 bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Urgent Hiring</span>
                </div>
                <p className="text-gray-600 mb-4">
                  High demand for licensed electricians across Canada with excellent compensation and benefits package.
                </p>
                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-bold mb-2">Comprehensive Benefits</h4>
                  <ul className="list-disc pl-5">
                    <li>Full visa sponsorship</li>
                    <li>Extended health benefits</li>
                    <li>Overtime opportunities</li>
                    <li>Tool and safety equipment allowance</li>
                    <li>Company vehicle</li>
                    <li>Housing assistance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Industrial Electrician</h3>
                <div className="flex items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">$7,200 CAD/month</span>
                  <span className="ml-4 bg-green-100 text-green-800 text-sm px-2 py-1 rounded">High Demand</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Specialized positions in manufacturing and industrial facilities with higher pay rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="certification">
          <h2>Certification Requirements</h2>
          
          <div className="not-prose">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Red Seal Certification</h3>
                <p className="text-gray-600 mb-4">
                  The Red Seal certification is required to work as an electrician in Canada.
                </p>
                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-bold mb-2">Certification Steps</h4>
                  <ul className="list-disc pl-5">
                    <li>Skills assessment</li>
                    <li>Educational credentials evaluation</li>
                    <li>Red Seal examination</li>
                    <li>Provincial licensing</li>
                    <li>Safety certifications</li>
                  </ul>
                </div>
                <div className="mt-4 bg-yellow-50 p-4 rounded">
                  <h4 className="font-bold mb-2">Experience Recognition</h4>
                  <p>Your previous electrical experience from Kenya will be evaluated and may reduce certification requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="locations">
          <h2>Top Hiring Locations</h2>
          
          <div className="not-prose">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-4">British Columbia</h3>
                <ul className="space-y-2">
                  <li>• Vancouver: 3,500+ openings</li>
                  <li>• Victoria: 1,200+ openings</li>
                  <li>• Average salary: $7,100/month</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-4">Ontario</h3>
                <ul className="space-y-2">
                  <li>• Toronto: 4,000+ openings</li>
                  <li>• Ottawa: 2,000+ openings</li>
                  <li>• Average salary: $6,900/month</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="visa" className="mt-8">
          <h2>Immigration Process</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Required Documents</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Valid passport</li>
              <li>Job offer letter</li>
              <li>LMIA approval</li>
              <li>Electrical certifications</li>
              <li>Work experience documentation</li>
              <li>Language test results</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Application Timeline</h3>
              <div className="bg-gray-50 p-4 rounded">
                <ul className="space-y-3">
                  <li><span className="font-semibold">Skills Assessment:</span> 2-3 months</li>
                  <li><span className="font-semibold">LMIA Processing:</span> 4-6 weeks</li>
                  <li><span className="font-semibold">Work Permit:</span> 4-8 weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <div className="my-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Success Story: From Mombasa to Vancouver</h3>
          <blockquote className="italic">
            "I came to Canada as an electrician with 8 years of experience from Kenya. 
            The certification process was straightforward, and now I'm earning more than 
            double what I made back home. The work-life balance is amazing."
            <footer className="mt-2 font-semibold">- Samuel M., Red Seal Electrician</footer>
          </blockquote>
        </div>
      </article>

      {/* Call to Action */}
      <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Launch Your Electrical Career in Canada</h2>
        <p className="text-lg mb-6">Get expert guidance on certification and immigration process</p>
        <Button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
          Start Your Journey
        </Button>
      </div>

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">How long is the certification process?</h3>
            <p className="text-gray-600">The complete process typically takes 4-6 months, including assessment and examinations.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">Are tools provided by employers?</h3>
            <p className="text-gray-600">Most employers provide a tool allowance and all specialized equipment needed for the job.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">What about family immigration?</h3>
            <p className="text-gray-600">Once you have your work permit, you can apply for family sponsorship to bring your family to Canada.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
