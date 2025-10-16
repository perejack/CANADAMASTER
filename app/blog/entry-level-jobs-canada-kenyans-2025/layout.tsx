import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Entry-Level Jobs in Canada for Kenyans 2025 | Complete Guide',
  description: 'Find entry-level jobs in Canada with visa sponsorship for Kenyans. Updated for 2025 with salary ranges and application process.',
  keywords: ['entry level jobs Canada', 'Kenyan jobs Canada', 'visa sponsorship', 'work in Canada', 'immigration Canada 2025'],
  openGraph: {
    title: 'Entry-Level Jobs in Canada for Kenyans 2025 | Complete Guide',
    description: 'Find entry-level jobs in Canada with visa sponsorship for Kenyans. Updated for 2025 with salary ranges and application process.',
    type: 'article',
    publishedTime: '2025-01-26T00:00:00.000Z',
    modifiedTime: '2025-01-26T00:00:00.000Z',
    authors: ['Global Digital Experts'],
    images: [{
      url: 'https://globaldigitalexperts.info/images/entry-level-jobs-canada.jpg',
      width: 1200,
      height: 630,
      alt: 'Entry-Level Jobs in Canada for Kenyans',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entry-Level Jobs in Canada for Kenyans 2025',
    description: 'Find entry-level jobs in Canada with visa sponsorship for Kenyans. Updated for 2025.',
    images: ['https://globaldigitalexperts.info/images/entry-level-jobs-canada.jpg'],
  },
  alternates: {
    canonical: 'https://globaldigitalexperts.info/blog/entry-level-jobs-canada-kenyans-2025'
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
