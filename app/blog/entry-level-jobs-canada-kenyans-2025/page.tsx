"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ApplicationModal from '../../components/ApplicationModal'
import Script from 'next/script'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Entry-Level Jobs in Canada for Kenyans 2025",
  "description": "Complete guide to finding entry-level jobs in Canada for Kenyans in 2025. Includes visa sponsorship opportunities, salary ranges, and application process.",
  "image": "https://globaldigitalexperts.info/images/entry-level-jobs-canada.jpg",
  "datePublished": "2025-01-26T00:00:00.000Z",
  "dateModified": "2025-01-26T00:00:00.000Z",
  "author": {
    "@type": "Organization",
    "name": "Global Digital Experts",
    "url": "https://globaldigitalexperts.info"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Global Digital Experts",
    "logo": {
      "@type": "ImageObject",
      "url": "https://globaldigitalexperts.info/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://globaldigitalexperts.info/blog/entry-level-jobs-canada-kenyans-2025"
  },
  "keywords": "entry level jobs canada, kenyan jobs canada, visa sponsorship, work in canada, immigration canada 2025"
}

const blogContent = {
  title: 'Entry Level Jobs in Canada for Foreigners: Complete Guide 2025',
  subtitle: 'Find Visa Sponsorship Jobs in Canada',
  sections: [
    {
      title: 'Top Entry Level Jobs in Canada with Visa Sponsorship',
      content: `Looking for job opportunities in Canada? This comprehensive guide covers everything you need to know about finding entry level jobs in Canada with visa sponsorship. Whether you're seeking nanny jobs, driver positions, or cleaning work, we'll show you how to secure employment with work permit support.

Current Job Opportunities:
• Nanny and Caregiver Positions (Salary: $30,000 - $45,000)
• Delivery and Driver Jobs (Salary: $35,000 - $65,000)
• Housekeeping and Cleaning Jobs (Salary: $28,000 - $40,000)
• Warehouse and Packaging Roles (Salary: $32,000 - $42,000)
• Retail and Customer Service (Salary: $30,000 - $40,000)`
    },
    {
      title: 'How to Get a Work Permit for Canada',
      content: `The process of obtaining a Canada work permit involves several steps:

1. Find a Job with Visa Sponsorship
   • Use our job board to find employers offering work permit support
   • Apply for positions matching your skills and experience
   • Receive a job offer from a Canadian employer

2. Work Permit Application
   • Submit your work permit application online
   • Provide required documentation
   • Pay application fees
   • Wait for processing (typically 2-4 months)

3. Express Entry Option
   • Create an Express Entry profile
   • Receive a Comprehensive Ranking System (CRS) score
   • Wait for an Invitation to Apply (ITA)
   • Submit permanent residence application if selected`
    },
    {
      title: 'Living and Working in Canada: What to Expect',
      content: `Benefits of Working in Canada:
• Competitive salaries with benefits
• Free healthcare coverage
• Multicultural work environment
• Path to permanent residence
• Family sponsorship options
• Quality education system

Popular Cities for Entry Level Jobs:
• Toronto, Ontario
• Vancouver, British Columbia
• Montreal, Quebec
• Calgary, Alberta
• Ottawa, Ontario`
    },
    {
      title: 'How to Apply for Jobs in Canada',
      content: `Follow these steps to increase your chances of finding employment in Canada:

1. Prepare Your Documents
   • Updated resume (Canadian format)
   • Educational credentials assessment
   • Reference letters
   • Language test results (IELTS/CELPIP)

2. Job Search Strategy
   • Use our job board for sponsored positions
   • Connect with Canadian employers
   • Apply to multiple positions
   • Follow up on applications

3. Interview Preparation
   • Research Canadian work culture
   • Practice common interview questions
   • Prepare questions about visa sponsorship
   • Highlight relevant skills and experience`
    }
  ],
  conclusion: `Start your journey to Canada today by exploring our current job openings with visa sponsorship. Whether you're looking for entry level positions or skilled work opportunities, our platform connects you with employers offering work permit support. Apply now and take the first step toward your Canadian dream.`
}

export default function EntryLevelJobs() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [formStep, setFormStep] = useState(1)

  const handleModalClose = () => {
    setSelectedJob(null)
    setFormStep(1)
  }

  const handleModalOpen = () => {
    setSelectedJob("Entry Level Jobs")
    setFormStep(1)
  }

  return (
    <>
      <Script
        id="entry-level-jobs-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* JSON-LD Structured Data */}
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blogContent.title,
          "description": "Complete guide to finding entry-level jobs in Canada for Kenyans in 2025. Includes visa sponsorship opportunities, salary ranges, and application process.",
          "image": "https://globaldigitalexperts.info/images/canada-jobs.jpg",
          "datePublished": "2025-01-28T00:00:00.000Z",
          "dateModified": "2025-01-28T00:00:00.000Z",
          "author": {
            "@type": "Organization",
            "name": "Global Digital Experts Team",
            "url": "https://globaldigitalexperts.info"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Global Digital Experts",
            "logo": {
              "@type": "ImageObject",
              "url": "https://globaldigitalexperts.info/logo.png"
            }
          },
          "keywords": "entry level jobs canada, kenyan jobs canada, visa sponsorship, work in canada, immigration canada 2025",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://globaldigitalexperts.info/blog/entry-level-jobs-canada-kenyans-2025"
          }
        })}} />

        {/* Blog Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blogContent.title}</h1>
          <p className="text-xl text-gray-600">{blogContent.subtitle}</p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 p-4 rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-2">Table of Contents</h2>
          <ul className="list-disc pl-5">
            {blogContent.sections.map((section) => (
              <li key={section.title}>
                <a href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Blog Sections */}
        {blogContent.sections.map((section) => (
          <section key={section.title} id={section.title.toLowerCase().replace(/\s+/g, '-')} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div className="prose max-w-none">
              {section.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* Conclusion */}
        <section className="bg-blue-50 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Canadian Journey?</h2>
          <p className="mb-6">{blogContent.conclusion}</p>
          <a 
            href="/jobs"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Jobs with Visa Sponsorship
          </a>
        </section>

        {/* Related Articles */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog/canada-work-permit-guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2">Complete Guide to Canada Work Permits</h3>
              <p className="text-gray-600">Learn about the application process, requirements, and processing times.</p>
            </a>
            <a href="/blog/express-entry-canada-2025" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2">Express Entry Canada: 2025 Updates</h3>
              <p className="text-gray-600">Latest changes and requirements for Express Entry immigration.</p>
            </a>
          </div>
        </section>
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
    </>
  )
}
