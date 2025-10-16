import type { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Complete Guide to Canadian Work Permits 2025 | Application Process & Requirements',
  description: 'Comprehensive guide to obtaining a Canadian work permit in 2025. Learn about LMIA requirements, processing times, costs, and step-by-step application process. Updated January 2025.',
  keywords: 'Canadian work permit 2025, work permit Canada guide, LMIA process, Canada visa application, work in Canada requirements',
  openGraph: {
    title: 'Complete Guide to Canadian Work Permits 2025 | Application Process & Requirements',
    description: 'Step-by-step guide to obtaining a Canadian work permit in 2025. Updated requirements and process.',
    type: 'article',
    publishedTime: '2025-01-26T00:00:00.000Z',
    authors: ['Global Digital Experts'],
    tags: ['Work Permit', 'Immigration', 'Canada', 'LMIA', 'Visa'],
  }
}

// Schema.org markup for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Guide to Canadian Work Permits in 2025",
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

export default function WorkPermitGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Add Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">Work Permits</span>
          <time className="text-gray-500">January 26, 2025</time>
          <span className="text-gray-500">12 min read</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Complete Guide to Canadian Work Permits in 2025</h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about obtaining a Canadian work permit in 2025, including updated requirements,
          processing times, and a step-by-step application guide.
        </p>
      </header>

      {/* Table of Contents */}
      <nav className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          <li><a href="#types" className="text-blue-600 hover:underline">Types of Work Permits</a></li>
          <li><a href="#requirements" className="text-blue-600 hover:underline">Eligibility Requirements</a></li>
          <li><a href="#lmia" className="text-blue-600 hover:underline">LMIA Process Explained</a></li>
          <li><a href="#application" className="text-blue-600 hover:underline">Application Process</a></li>
          <li><a href="#processing-times" className="text-blue-600 hover:underline">Processing Times and Fees</a></li>
          <li><a href="#tips" className="text-blue-600 hover:underline">Tips for Success</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <article className="prose lg:prose-xl">
        <section id="types">
          <h2>Types of Work Permits</h2>
          <p>
            Canada offers several types of work permits, each designed for specific situations and requirements. The main categories are:
          </p>
          <ul>
            <li><strong>Open Work Permit:</strong> Allows you to work for any employer in Canada</li>
            <li><strong>Employer-Specific Work Permit:</strong> Limits you to working for a specific employer</li>
            <li><strong>LMIA-Based Work Permit:</strong> Requires a Labour Market Impact Assessment</li>
            <li><strong>LMIA-Exempt Work Permit:</strong> Available under international agreements or special programs</li>
          </ul>
        </section>

        <section id="requirements">
          <h2>Eligibility Requirements</h2>
          <p>
            To qualify for a Canadian work permit in 2025, you must meet these basic requirements:
          </p>
          <ul>
            <li>Prove you will leave Canada when your work permit expires</li>
            <li>Show you have enough money to support yourself and your family</li>
            <li>Have no criminal record and provide a police clearance certificate</li>
            <li>Be in good health and complete a medical exam if required</li>
            <li>Prove you will not work for an employer listed as ineligible</li>
            <li>Provide any additional documents required for your specific situation</li>
          </ul>
        </section>

        <section id="lmia">
          <h2>LMIA Process Explained</h2>
          <p>
            A Labour Market Impact Assessment (LMIA) is a document that an employer in Canada may need to obtain before hiring a foreign worker. Here's what you need to know:
          </p>
          <ul>
            <li>Employers must prove no Canadian worker is available for the job</li>
            <li>The process includes advertising the position for at least 4 weeks</li>
            <li>Processing times vary by position and region</li>
            <li>Some positions are LMIA-exempt under specific programs</li>
          </ul>
        </section>

        <section id="application">
          <h2>Application Process</h2>
          <p>
            Follow these steps to apply for your Canadian work permit:
          </p>
          <ol>
            <li>Determine if you need a work permit</li>
            <li>Obtain a job offer from a Canadian employer</li>
            <li>Get an LMIA if required</li>
            <li>Gather all required documents</li>
            <li>Submit your application online or on paper</li>
            <li>Pay the required fees</li>
            <li>Wait for processing</li>
            <li>Respond to any requests for additional information</li>
          </ol>
        </section>

        <section id="processing-times">
          <h2>Processing Times and Fees</h2>
          <p>
            Current processing times and fees for 2025:
          </p>
          <ul>
            <li>Work Permit Application Fee: CAD $155</li>
            <li>Open Work Permit Holder Fee: CAD $100</li>
            <li>Biometrics Fee: CAD $85</li>
            <li>Processing Time: 4-8 weeks (varies by country and type)</li>
          </ul>
        </section>

        <section id="tips">
          <h2>Tips for Success</h2>
          <ul>
            <li>Apply at least 3 months before your intended start date</li>
            <li>Ensure all documents are properly translated</li>
            <li>Double-check all forms for accuracy</li>
            <li>Keep copies of everything you submit</li>
            <li>Track your application status online</li>
          </ul>
        </section>

        {/* Call to Action */}
        <div className="my-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Need Help With Your Work Permit Application?</h3>
          <p className="mb-4">
            Our expert team can guide you through the entire process and increase your chances of success.
          </p>
          <Button asChild>
            <Link href="/contact">Get Professional Assistance</Link>
          </Button>
        </div>
      </article>

      {/* Author Bio */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">About the Author</h3>
        <p className="text-gray-600">
          Written by the Global Digital Experts team. We specialize in Canadian immigration services and have helped
          thousands of individuals successfully obtain their work permits.
        </p>
      </div>

      {/* Related Articles */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/in-demand-jobs-canada-2025" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="font-bold mb-2">Top 15 In-Demand Jobs in Canada for 2025</h4>
            <p className="text-gray-600">Discover the most sought-after jobs in Canada for 2025...</p>
          </Link>
          <Link href="/blog/living-in-canada-guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="font-bold mb-2">Living in Canada: A Newcomer's Complete Guide</h4>
            <p className="text-gray-600">Essential guide for new immigrants covering housing, healthcare...</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
