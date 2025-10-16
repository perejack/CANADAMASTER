"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ApplicationModal from '../../components/ApplicationModal'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Plumbing Jobs in Canada 2025: Complete Guide with Salary Information",
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
    "@id": "https://yoursite.com/blog/plumbing-jobs-canada-kenyans-2025"
  },
  "description": "Complete guide to plumbing jobs in Canada with visa sponsorship. Latest salary information and requirements for 2025.",
  "keywords": "plumbing jobs Canada 2025, plumber salary Canada, visa sponsorship plumbing"
}

export default function PlumbingJobs() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [formStep, setFormStep] = useState(1)

  const handleModalClose = () => {
    setSelectedJob(null)
    setFormStep(1)
  }

  const handleModalOpen = () => {
    setSelectedJob("Plumbing")
    setFormStep(1)
  }

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
        <h1 className="text-4xl font-bold mb-4">Plumbing Jobs in Canada 2025: Complete Guide</h1>
        <p className="text-xl text-gray-600">
          Discover high-paying plumbing opportunities in Canada with visa sponsorship. 
          Earn up to $6,933/month with comprehensive benefits and career growth potential.
        </p>

        {/* Quick Navigation */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="#opportunities" className="text-blue-600 hover:underline">→ Job Opportunities</Link>
            <Link href="#certification" className="text-blue-600 hover:underline">→ Certification Process</Link>
            <Link href="#provinces" className="text-blue-600 hover:underline">→ Top Provinces</Link>
            <Link href="#visa" className="text-blue-600 hover:underline">→ Visa Requirements</Link>
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
          <h3 className="font-bold text-lg mb-2">Job Openings</h3>
          <p className="text-3xl font-bold text-green-600">15,000+</p>
          <p className="text-sm text-gray-600">Across Canada</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-bold text-lg mb-2">Experience Needed</h3>
          <p className="text-3xl font-bold text-green-600">2-5</p>
          <p className="text-sm text-gray-600">Years minimum</p>
        </div>
      </div>

      {/* Main Content */}
      <article className="prose lg:prose-xl">
        <section id="opportunities">
          <h2>Plumbing Opportunities in Canada</h2>
          
          <div className="not-prose">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Licensed Plumber</h3>
                <div className="flex items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">$6,933 CAD/month</span>
                  <span className="ml-4 bg-green-100 text-green-800 text-sm px-2 py-1 rounded">High Demand</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Exceptional demand for licensed plumbers across Canada with comprehensive benefits package and overtime opportunities.
                </p>
                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-bold mb-2">Benefits Package</h4>
                  <ul className="list-disc pl-5">
                    <li>Full visa sponsorship</li>
                    <li>Health and dental insurance</li>
                    <li>Paid overtime opportunities</li>
                    <li>Tool allowance</li>
                    <li>Vehicle provided for work</li>
                    <li>Accommodation assistance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certification">
          <h2>Certification Requirements</h2>
          
          <div className="not-prose">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Red Seal Certification Process</h3>
                <p className="text-gray-600 mb-4">
                  To work as a licensed plumber in Canada, you'll need to obtain Red Seal certification.
                </p>
                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-bold mb-2">Requirements</h4>
                  <ul className="list-disc pl-5">
                    <li>Proof of previous plumbing experience</li>
                    <li>Educational credentials assessment</li>
                    <li>Red Seal examination</li>
                    <li>Provincial/territorial certification</li>
                    <li>Safety certifications</li>
                  </ul>
                </div>
                <div className="mt-4 bg-yellow-50 p-4 rounded">
                  <h4 className="font-bold mb-2">Fast-Track Programs Available</h4>
                  <p>Many provinces offer accelerated certification programs for experienced international plumbers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="provinces">
          <h2>Top Hiring Provinces</h2>
          
          <div className="not-prose">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-4">Alberta</h3>
                <ul className="space-y-2">
                  <li>• Calgary: 2,000+ openings</li>
                  <li>• Edmonton: 1,800+ openings</li>
                  <li>• Average salary: $7,200/month</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-4">Ontario</h3>
                <ul className="space-y-2">
                  <li>• Toronto: 3,000+ openings</li>
                  <li>• Ottawa: 1,500+ openings</li>
                  <li>• Average salary: $6,800/month</li>
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
              <li>Proof of qualifications</li>
              <li>Work experience letters</li>
              <li>Language test results</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Processing Timeline</h3>
              <div className="bg-gray-50 p-4 rounded">
                <ul className="space-y-3">
                  <li><span className="font-semibold">Certification Assessment:</span> 2-3 months</li>
                  <li><span className="font-semibold">LMIA Processing:</span> 4-6 weeks</li>
                  <li><span className="font-semibold">Work Permit:</span> 4-8 weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <div className="my-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Success Story: From Nairobi to Calgary</h3>
          <blockquote className="italic">
            "After 5 years as a plumber in Kenya, I moved to Calgary through this program. 
            The salary is amazing, and I've already been promoted to lead plumber. 
            The company even helped with my family's relocation."
            <footer className="mt-2 font-semibold">- David K., Red Seal Certified Plumber</footer>
          </blockquote>
        </div>
      </article>

      {/* Call to Action */}
      <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Start Your Plumbing Career in Canada</h2>
        <p className="text-lg mb-6">Get personalized guidance on certification and immigration process</p>
        <Button 
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors"
          onClick={handleModalOpen}
        >
          Apply Now
        </Button>
      </div>

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">How long does the certification process take?</h3>
            <p className="text-gray-600">The complete process typically takes 4-6 months, including assessment and examinations.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">Is accommodation provided?</h3>
            <p className="text-gray-600">Many employers offer accommodation assistance or housing allowance for the first few months.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">What tools are provided?</h3>
            <p className="text-gray-600">Employers provide a tool allowance and all specialized equipment needed for the job.</p>
          </div>
        </div>
      </section>
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
