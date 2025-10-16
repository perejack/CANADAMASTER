"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ApplicationModal from '../../components/ApplicationModal'
import { jsonLd } from './metadata'

export default function ServiceJobs() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [formStep, setFormStep] = useState(1)

  const handleModalClose = () => {
    setSelectedJob(null)
    setFormStep(1)
  }

  const handleModalOpen = () => {
    setSelectedJob("Service Industry")
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
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">Service Industry</span>
          <time className="text-gray-500">Updated: January 26, 2025</time>
          <span className="text-gray-500">15 min read</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Service Industry Jobs in Canada 2025: Complete Guide</h1>
        <p className="text-xl text-gray-600">
          Discover rewarding service industry opportunities in Canada with visa sponsorship. 
          From driving to childcare, find your perfect role with competitive pay and benefits.
        </p>

        {/* Quick Navigation */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="#driver" className="text-blue-600 hover:underline">→ Driver Positions</Link>
            <Link href="#chef" className="text-blue-600 hover:underline">→ Chef Opportunities</Link>
            <Link href="#nanny" className="text-blue-600 hover:underline">→ Nanny Jobs</Link>
            <Link href="#cleaner" className="text-blue-600 hover:underline">→ Cleaner Positions</Link>
            <Link href="#initiative" className="text-blue-600 hover:underline">→ Government Initiative</Link>
          </div>
        </div>
      </header>

      {/* Government Initiative Section */}
      <section id="initiative" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Kenya-Canada Partnership Initiative</h2>
        <div className="relative w-full h-[400px] mb-6">
          <Image
            src="https://www.theeastafrican.co.ke/resource/image/4256964/landscape_ratio16x9/1600/900/766b435d5e6f6bf9e650dd5db052cf8d/aZ/dnstate.jpg"
            alt="Kenya-Canada Partnership Meeting"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">2025 Employment Partnership Program</h3>
          <p className="text-gray-700 mb-4">
            The Kenyan and Canadian governments have established a groundbreaking partnership to facilitate employment opportunities for Kenyan workers in Canada's service industry. This initiative aims to create 50,000 job opportunities by 2026.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Streamlined visa processing</li>
            <li>Pre-departure training programs</li>
            <li>Skill recognition frameworks</li>
            <li>Settlement support services</li>
          </ul>
        </div>
      </section>

      {/* Key Statistics */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-bold text-lg mb-2">Driver Salary</h3>
          <p className="text-2xl font-bold text-green-600">$3,500</p>
          <p className="text-sm text-gray-600">CAD/month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-bold text-lg mb-2">Chef Salary</h3>
          <p className="text-2xl font-bold text-green-600">$4,200</p>
          <p className="text-sm text-gray-600">CAD/month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-bold text-lg mb-2">Nanny Salary</h3>
          <p className="text-2xl font-bold text-green-600">$3,200</p>
          <p className="text-sm text-gray-600">CAD/month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="font-bold text-lg mb-2">Cleaner Salary</h3>
          <p className="text-2xl font-bold text-green-600">$2,800</p>
          <p className="text-sm text-gray-600">CAD/month</p>
        </div>
      </div>

      {/* Main Content */}
      <article className="prose lg:prose-xl">
        <section id="driver">
          <h2>Driver Positions in Canada</h2>
          
          <div className="not-prose">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Professional Driver Positions</h3>
                <p className="mb-4">
                  Start your driving career in Canada with positions in delivery, taxi, and private chauffeur services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="chef">
          <h2>Chef & Cooking Positions</h2>
          
          <div className="not-prose">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Professional Chef</h3>
                <div className="flex items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">$4,200 CAD/month</span>
                  <span className="ml-4 bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Urgent Hiring</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Opportunities in restaurants, hotels, and catering services across Canada.
                </p>
                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-bold mb-2">Benefits Package</h4>
                  <ul className="list-disc pl-5">
                    <li>Health insurance</li>
                    <li>Accommodation allowance</li>
                    <li>Meal benefits</li>
                    <li>Career advancement</li>
                    <li>Training opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="nanny">
          <h2>Nanny & Childcare Positions</h2>
          
          <div className="not-prose">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Nanny & Childcare</h3>
                <p className="mb-4">
                  Join Canadian families as a professional nanny or childcare provider.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cleaner">
          <h2>Cleaning & Housekeeping Positions</h2>
          
          <div className="not-prose">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Professional Cleaner</h3>
                <div className="flex items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">$2,800 CAD/month</span>
                  <span className="ml-4 bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Available Now</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Positions available in hotels, offices, and residential cleaning services.
                </p>
                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-bold mb-2">Work Benefits</h4>
                  <ul className="list-disc pl-5">
                    <li>Flexible schedules</li>
                    <li>Health benefits</li>
                    <li>Paid training</li>
                    <li>Transportation allowance</li>
                    <li>Performance bonuses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <div className="my-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="italic">
              "I started as a driver in Toronto and now manage a fleet of delivery vehicles. 
              The opportunities for growth are amazing."
              <footer className="mt-2 font-semibold">- John K., Fleet Manager</footer>
            </blockquote>
            <blockquote className="italic">
              "Working as a nanny in Vancouver has been wonderful. The family sponsored 
              my permanent residence application."
              <footer className="mt-2 font-semibold">- Sarah M., Professional Nanny</footer>
            </blockquote>
          </div>
        </div>

        {/* Visa Requirements */}
        <section id="visa" className="mt-8">
          <h2>Immigration Process</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Required Documents</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>National ID</li>
              <li>Application Letter</li>
              <li>Language test results</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Processing Timeline</h3>
              <div className="bg-gray-50 p-4 rounded">
                <ul className="space-y-3">
                  <li><span className="font-semibold">Document Preparation:</span> 2-3 weeks</li>
                  <li><span className="font-semibold">LMIA Processing:</span> 4-6 weeks</li>
                  <li><span className="font-semibold">Work Permit:</span> 4-8 weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Call to Action */}
      <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Start Your Canadian Service Industry Career</h2>
        <p className="text-lg mb-6">Get expert guidance on finding the right position and immigration process</p>
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
            <h3 className="font-bold mb-2">Is accommodation provided?</h3>
            <p className="text-gray-600">Many positions offer accommodation allowance or live-in options, especially for nanny positions.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">What about training?</h3>
            <p className="text-gray-600">All positions include paid training programs to help you adapt to Canadian standards.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-2">Can I bring my family?</h3>
            <p className="text-gray-600">Yes, after establishing yourself, you can apply for family sponsorship.</p>
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
