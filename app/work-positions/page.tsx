import { Metadata } from 'next'
import WorkPositions from '../components/WorkPositions'

export async function generateMetadata(): Promise<Metadata> {
  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do these jobs provide visa sponsorship?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all listed positions include full visa sponsorship and work permit assistance for qualified candidates.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the average salary for jobs in Canada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Salaries range from $2,600 to $6,933 CAD per month depending on the position.'
        }
      }
    ]
  }

  // Job Posting Schema
  const jobPostingStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Multiple Positions Available in Canada',
    description: 'Various job opportunities in Canada with visa sponsorship. Positions include welding, security, housekeeping, and more.',
    datePosted: '2024-01-23',
    validThrough: '2025-12-31',
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Global Digital Experts',
      sameAs: 'https://globaldigitalexperts.info'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CA',
        addressRegion: ['Ontario', 'British Columbia', 'Quebec']
      }
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'CAD',
      value: {
        '@type': 'QuantitativeValue',
        minValue: 2600,
        maxValue: 6933,
        unitText: 'MONTH'
      }
    },
    benefits: [
      'Visa sponsorship',
      'Health insurance',
      'Accommodation assistance',
      'Career development'
    ]
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://globaldigitalexperts.info'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Work Positions',
        item: 'https://globaldigitalexperts.info/work-positions'
      }
    ]
  }

  return {
    title: 'Canada Jobs with Visa Sponsorship 2025 | High-Paying Work Positions',
    description: 'Find high-paying jobs in Canada with visa sponsorship. Positions in welding, housekeeping, security, and more. Salaries up to $6,933/month with accommodation.',
    keywords: 'Canada jobs, visa sponsorship 2025, work in Canada, Canadian jobs, high paying jobs Canada, welder jobs, security jobs, housekeeping jobs',
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: 'Canada Jobs with Visa Sponsorship 2025 | Apply Now',
      description: 'Latest job openings in Canada with visa sponsorship. Positions available in welding, security, housekeeping and more. Full visa support provided.',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: '/images/bartender.jpg',
          width: 1200,
          height: 630,
          alt: 'Canada Jobs with Visa Sponsorship'
        }
      ],
      siteName: 'Global Digital Experts'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Canada Jobs with Visa Sponsorship 2025',
      description: 'Find your dream job in Canada. High-paying positions with visa sponsorship and accommodation.',
      images: ['/images/bartender.jpg'],
      site: '@globaldigitalexperts'
    },
    alternates: {
      canonical: 'https://globaldigitalexperts.info/work-positions',
      languages: {
        'en-US': 'https://globaldigitalexperts.info/work-positions',
        'fr-CA': 'https://globaldigitalexperts.info/fr/work-positions'
      }
    },
    other: {
      structured: JSON.stringify([jobPostingStructuredData, faqSchema, breadcrumbSchema])
    }
  }
}

export default function WorkPositionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Canada Jobs with Visa Sponsorship 2025</h1>
          <p className="text-xl text-gray-600">Find High-Paying Jobs Abroad with Accommodation</p>
        </div>
        <WorkPositions />
      </div>
    </div>
  )
}
