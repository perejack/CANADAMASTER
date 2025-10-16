import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Canada Jobs Blog for Kenyans - Latest Opportunities & Immigration Guides 2025',
  description: 'Expert guides on finding high-paying jobs in Canada, work permits, and immigration process. Updated weekly with latest opportunities for Kenyan professionals.',
  keywords: 'jobs in Canada for Kenyans, Canada visa from Kenya, work permit Canada Kenya, Canadian immigration Kenya, Kenya to Canada jobs',
  openGraph: {
    title: 'Canada Jobs Blog for Kenyans - Latest Opportunities & Immigration Guides 2025',
    description: 'Expert guides on finding high-paying jobs in Canada, work permits, and immigration process. Updated weekly with latest opportunities for Kenyan professionals.',
    type: 'website',
    url: 'https://yoursite.com/blog',
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
