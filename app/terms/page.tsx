import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Global Visa Experts Canada',
  description: 'Terms of Service for Global Visa Experts Canada - Legal terms and conditions for using our services.',
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
          <p className="mb-4">
            Global Visa Experts Canada provides immigration consultation and job placement services for individuals seeking employment opportunities in Canada. Our services include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Job matching and placement assistance</li>
            <li>Immigration consultation services</li>
            <li>Work permit application support</li>
            <li>Career guidance and counseling</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
          <p className="mb-4">
            Users agree to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate and truthful information</li>
            <li>Maintain the confidentiality of their account information</li>
            <li>Use the service only for lawful purposes</li>
            <li>Not engage in any fraudulent or misleading activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Service Limitations</h2>
          <p className="mb-4">
            Please note that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>We facilitate connections between job seekers and employers but do not guarantee employment</li>
            <li>Immigration outcomes depend on government decisions and individual circumstances</li>
            <li>Processing times may vary based on government requirements</li>
            <li>Success is not guaranteed and depends on various factors beyond our control</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Fees and Payments</h2>
          <p className="mb-4">
            Service fees will be clearly communicated before any paid services are rendered. Refund policies will be provided at the time of service agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Privacy and Data Protection</h2>
          <p className="mb-4">
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">
            Global Visa Experts Canada shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
          <p className="mb-4">
            All content on this website, including text, graphics, logos, and images, is the property of Global Visa Experts Canada and is protected by copyright laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
          <p className="mb-4">
            For questions about these Terms of Service, please contact us at:
          </p>
          <p className="mb-2">
            <strong>Email:</strong> globalvisaexpertscanada@gmail.com
          </p>
          <p className="mb-2">
            <strong>Address:</strong> Toronto, Ontario, Canada
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
          <p className="mb-4">
            These terms shall be governed by and construed in accordance with the laws of Canada and the Province of Ontario.
          </p>
        </section>
      </div>
    </div>
  )
}
