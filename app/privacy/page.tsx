import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Global Visa Experts Canada',
  description: 'Privacy Policy for Global Visa Experts Canada - How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fill out application forms on our website</li>
            <li>Contact us via email or phone</li>
            <li>Subscribe to our newsletter</li>
            <li>Use our services</li>
          </ul>
          <p className="mb-4">
            The types of information we may collect include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information</li>
            <li>Phone number and email address</li>
            <li>Employment and education details</li>
            <li>Immigration status and nationality</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process your job applications and immigration services</li>
            <li>Communicate with you about our services</li>
            <li>Send you updates about job opportunities</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>To trusted service providers who assist us in operating our website</li>
            <li>To potential employers (with your explicit consent)</li>
            <li>When required by law or to protect our rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
          <p className="mb-4">
            Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-2">
            <strong>Email:</strong> globalvisaexpertscanada@gmail.com
          </p>
          <p className="mb-2">
            <strong>Address:</strong> Toronto, Ontario, Canada
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>
      </div>
    </div>
  )
}
