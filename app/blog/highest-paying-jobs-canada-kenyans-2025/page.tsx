"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ApplicationModal from '../../components/ApplicationModal'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Top 10 Highest-Paying Jobs in Canada for Kenyans 2025",
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
  }
}

export default function HighestPayingJobs() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [formStep, setFormStep] = useState(1)

  const handleModalClose = () => {
    setSelectedJob(null)
    setFormStep(1)
  }

  const handleModalOpen = () => {
    setSelectedJob("High-Paying Jobs")
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
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">Salary Guide</span>
          <time className="text-gray-500">January 26, 2025</time>
          <span className="text-gray-500">10 min read</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Top 10 Highest-Paying Jobs in Canada for Kenyans 2025</h1>
        <p className="text-xl text-gray-600">
          Discover the most lucrative career opportunities in Canada with complete salary breakdowns, 
          qualification requirements, and visa sponsorship details.
        </p>
      </header>

      {/* Table of Contents */}
      <nav className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          <li><a href="#skilled-trades" className="text-blue-600 hover:underline">Skilled Trades Opportunities</a></li>
          <li><a href="#hospitality" className="text-blue-600 hover:underline">Hospitality Industry Positions</a></li>
          <li><a href="#qualifications" className="text-blue-600 hover:underline">Required Qualifications</a></li>
          <li><a href="#visa-process" className="text-blue-600 hover:underline">Visa Sponsorship Process</a></li>
          <li><a href="#benefits" className="text-blue-600 hover:underline">Additional Benefits</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <article className="prose lg:prose-xl">
        <section id="skilled-trades">
          <h2>Highest-Paying Skilled Trades in Canada</h2>
          
          <div className="not-prose">
            {/* Plumber */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">1. Plumber</h3>
                <div className="flex items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">$5,200 - $6,933 CAD/month</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Plumbers are among the highest-paid skilled workers in Canada, with excellent job security and growth potential.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Full visa sponsorship available</li>
                  <li>Accommodation assistance provided</li>
                  <li>Career advancement opportunities</li>
                  <li>Health insurance benefits</li>
                </ul>
              </div>
            </div>

            {/* Electrician */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">2. Electrician</h3>
                <div className="flex items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">$5,200 - $6,933 CAD/month</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Electricians are in high demand across Canada, with opportunities in residential, commercial, and industrial sectors.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>High demand across all provinces</li>
                  <li>Complete training provided</li>
                  <li>Safety certification included</li>
                  <li>Overtime opportunities available</li>
                </ul>
              </div>
            </div>

            {/* Welder */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">3. Welder</h3>
                <div className="flex items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">$4,333 - $6,066 CAD/month</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Welders are essential in Canada's construction and manufacturing industries, with excellent compensation packages.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Projects across various industries</li>
                  <li>Safety equipment provided</li>
                  <li>Skills development programs</li>
                  <li>Performance bonuses available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="hospitality">
          <h2>High-Paying Hospitality Positions</h2>
          
          <div className="not-prose">
            {/* Chef */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">4. Chef</h3>
                <div className="flex items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">$3,120 - $5,200 CAD/month</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Chefs are highly valued in Canada's diverse culinary scene, with opportunities in restaurants, hotels, and resorts.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Creative work environment</li>
                  <li>Career growth opportunities</li>
                  <li>Training and development</li>
                  <li>Food and meal benefits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="qualifications">
          <h2>Required Qualifications</h2>
          <p>
            To qualify for these high-paying positions, you'll need:
          </p>
          <ul>
            <li>Relevant trade certification or diploma</li>
            <li>Minimum 2-3 years of experience</li>
            <li>Safety certifications (provided during training)</li>
            <li>English language proficiency (IELTS score of 6.0 or higher)</li>
            <li>Clean criminal record</li>
            <li>Strong work ethic and reliability</li>
          </ul>
        </section>

        <section id="visa-process">
          <h2>Visa Sponsorship Process</h2>
          <p>
            All positions include full visa sponsorship support:
          </p>
          <ul>
            <li>LMIA application handled by employer</li>
            <li>Work permit assistance provided</li>
            <li>Documentation support throughout the process</li>
            <li>Settlement assistance upon arrival</li>
          </ul>
        </section>

        <section id="benefits">
          <h2>Additional Benefits</h2>
          <p>
            These positions come with comprehensive benefits packages:
          </p>
          <ul>
            <li>Health and dental insurance</li>
            <li>Paid vacation time</li>
            <li>Overtime opportunities</li>
            <li>Professional development</li>
            <li>Accommodation assistance</li>
            <li>Transportation allowance</li>
          </ul>
        </section>

        {/* Call to Action */}
        <div className="my-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Ready to Start Your Canadian Career?</h3>
          <p className="mb-4">
            Our team specializes in helping Kenyan professionals secure high-paying jobs in Canada. 
            Get personalized guidance throughout your application process.
          </p>
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors"
            onClick={handleModalOpen}
          >
            Apply Now
          </Button>
        </div>
      </article>
      {selectedJob && (
        <ApplicationModal
          isOpen={!!selectedJob}
          onClose={handleModalClose}
          jobTitle={selectedJob}
          currentStep={formStep}
          onStepChange={setFormStep}
        />
      )}
      {/* FAQ Section with Schema Markup */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">How long does the visa process take?</h3>
            <p className="text-gray-600">The visa process typically takes 2-4 months from application to approval. Our team handles all paperwork to ensure a smooth process.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">Is accommodation provided?</h3>
            <p className="text-gray-600">Yes, most positions include accommodation assistance for the first few months to help you settle in Canada.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">Can I bring my family?</h3>
            <p className="text-gray-600">Yes, once you secure employment and obtain your work permit, you can apply for family sponsorship.</p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/canadian-work-permit-guide-2025" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="font-bold mb-2">Complete Guide to Canadian Work Permits in 2025</h4>
            <p className="text-gray-600">Step-by-step guide to obtaining your Canadian work permit...</p>
          </Link>
          <Link href="/blog/living-in-canada-guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="font-bold mb-2">Living in Canada: Essential Guide for Kenyans</h4>
            <p className="text-gray-600">Everything you need to know about life in Canada...</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
