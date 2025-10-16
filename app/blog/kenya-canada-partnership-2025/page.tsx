import type { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Kenya-Canada Partnership 2025: New Employment Opportunities & Bilateral Agreements',
  description: 'Latest updates on Kenya-Canada bilateral agreements, employment partnerships, and immigration pathways. Official government initiatives and opportunities for Kenyan professionals.',
  keywords: 'Kenya Canada partnership, bilateral agreements Kenya Canada, Kenya embassy Canada, Canada immigration Kenya, Kenya government Canada jobs',
  openGraph: {
    title: 'Kenya-Canada Partnership 2025: Official Employment Initiatives',
    description: 'Latest Kenya-Canada bilateral agreements and employment opportunities. Official government partnerships and immigration pathways.',
    type: 'article',
    publishedTime: '2025-01-26T00:00:00.000Z',
    authors: ['Global Digital Experts'],
    tags: ['Government Initiatives', 'Bilateral Agreements', 'Kenya Canada Relations', 'Employment']
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Kenya-Canada Partnership 2025: New Employment Opportunities",
  "datePublished": "2025-01-26T00:00:00.000Z",
  "dateModified": "2025-01-26T00:00:00.000Z",
  "author": {
    "@type": "Organization",
    "name": "Global Digital Experts"
  }
}

export default function KenyaCanadaPartnership() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">Government Initiatives</span>
          <time className="text-gray-500">January 26, 2025</time>
          <span className="text-gray-500">15 min read</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Kenya-Canada Partnership 2025: New Employment Opportunities</h1>
        <p className="text-xl text-gray-600">
          Comprehensive guide to new bilateral agreements, government initiatives, and employment opportunities 
          between Kenya and Canada. Latest updates on immigration pathways and official partnerships.
        </p>
      </header>

      {/* Latest Updates Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Latest Updates - January 2025</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            New bilateral agreement signed for skilled worker mobility
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            Enhanced visa processing for Kenyan healthcare professionals
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            Special work permit streams for Kenyan tech workers
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <article className="prose lg:prose-xl">
        <section>
          <h2>New Bilateral Agreements (2025)</h2>
          <p>
            The Kenyan Ministry of Labour and Social Protection has established groundbreaking partnerships 
            with Canadian provinces, focusing on skilled worker mobility and professional recognition.
          </p>
          
          <div className="not-prose bg-white rounded-lg shadow-md p-6 my-6">
            <h3 className="text-xl font-bold mb-4">Key Partnership Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Fast-track visa processing for priority sectors
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Mutual recognition of professional qualifications
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Joint training and skills development programs
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Priority Sectors for Employment</h2>
          
          <div className="not-prose grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Healthcare Sector</h3>
              <ul className="space-y-2">
                <li>• Registered Nurses: 2,500+ positions</li>
                <li>• Personal Support Workers: 1,800+ positions</li>
                <li>• Healthcare Administrators: 500+ positions</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Technology Sector</h3>
              <ul className="space-y-2">
                <li>• Software Developers: 1,500+ positions</li>
                <li>• IT Specialists: 1,200+ positions</li>
                <li>• Data Analysts: 800+ positions</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Government Support Services</h2>
          
          <div className="not-prose bg-white rounded-lg shadow-md p-6 my-6">
            <h3 className="text-xl font-bold mb-4">Kenya High Commission Support</h3>
            <p className="mb-4">
              The Kenya High Commission in Ottawa provides comprehensive support services:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Document authentication and verification
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Employment contract review services
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Pre-departure orientation programs
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Immigration Pathways</h2>
          
          <div className="not-prose">
            <div className="bg-white rounded-lg shadow-md p-6 my-6">
              <h3 className="text-xl font-bold mb-4">Express Entry for Kenyans</h3>
              <div className="space-y-4">
                <p>
                  New priority processing for Kenyan applicants in key sectors:
                </p>
                <ul className="space-y-2">
                  <li>• Healthcare professionals: 14-day processing</li>
                  <li>• Tech workers: 21-day processing</li>
                  <li>• Skilled trades: 30-day processing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="not-prose">
          <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <blockquote className="italic mb-6">
              "The new bilateral agreement made my transition to Canada seamless. 
              The Kenya High Commission's support was invaluable in verifying my 
              credentials and reviewing my employment contract."
              <footer className="mt-2 font-semibold">
                - James K., Software Developer in Toronto
              </footer>
            </blockquote>
            <blockquote className="italic">
              "Thanks to the fast-track processing for healthcare workers, 
              I was able to start my nursing career in Vancouver within two months 
              of application."
              <footer className="mt-2 font-semibold">
                - Sarah M., Registered Nurse in Vancouver
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Official Resources */}
        <section className="not-prose mt-8">
          <h2 className="text-2xl font-bold mb-6">Official Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-4">Kenyan Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Ministry of Labour Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Kenya High Commission - Canada
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    NEA Job Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-4">Canadian Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Immigration, Refugees and Citizenship Canada
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Provincial Nominee Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Job Bank Canada
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="not-prose mt-8 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Start Your Canadian Journey Today</h3>
          <p className="mb-6">
            Get personalized guidance on employment opportunities and immigration pathways.
            Our team works directly with government agencies to ensure a smooth transition.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/work-positions">Browse Jobs</Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/healthcare-jobs-canada-kenyans-2025" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="font-bold mb-2">Healthcare Jobs in Canada for Kenyans</h4>
            <p className="text-gray-600">Explore opportunities in the healthcare sector...</p>
          </Link>
          <Link href="/blog/highest-paying-jobs-canada-kenyans-2025" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="font-bold mb-2">Highest Paying Jobs in Canada</h4>
            <p className="text-gray-600">Discover top-paying positions with visa sponsorship...</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
