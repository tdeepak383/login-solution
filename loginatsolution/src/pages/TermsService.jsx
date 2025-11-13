import React from 'react'

function TermsService() {
  return (
    <>
     <section className="min-h-screen text-gray-800 px-6 md:px-20">
      <div className="max-w-6xl mx-auto py-5 md:py-10">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--pink)] mb-3">
            Terms of Use
          </h1>
          <p className="text-gray-500 text-sm">
            Last updated: <span className="font-semibold">{new Date().toLocaleDateString()}</span>
          </p>
        </header>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-10">
          Welcome to{" "}
          <span className="font-semibold text-[var(--pink)]">
            loginatsolution.com
          </span>{" "}
          , operated by{" "}
          <span className="font-semibold">LoginAt Solutions Pvt. Ltd.</span>{" "}. By accessing or using this Website,
          you agree to comply with and be bound by the following Terms of Use. If you do not agree with these Terms, please do not use
          this Website.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              1. Acceptance of Terms
            </h2>
            <p>
              By using this Website or any of our services, you confirm that you
              are at least 18 years old and legally capable of entering into
              binding contracts under applicable law.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              2. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time without
              prior notice. Any updates will be effective immediately upon
              posting on this page.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              3. Use of the Website
            </h2>
            <p className="mb-3">
              You agree to use the Website only for lawful purposes and in
              accordance with these Terms. You must not:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-3 text-gray-700">
              <li>
                Attempt to gain unauthorized access to any part of the Website
                or our systems.
              </li>
              <li>Interfere with the proper functioning of the Website.</li>
              <li>Upload or transmit any viruses, malware, or harmful code.</li>
              <li>
                Use the Website to send unsolicited communications or spam.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              4. Intellectual Property
            </h2>
            <p>
              All content on this Website, including text, graphics, logos,
              designs, and software, is the property of LoginAt Solutions Pvt.
              Ltd. or its licensors. You may not reproduce, distribute, or
              modify any part of the Website without our prior written
              permission.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              5. User Accounts
            </h2>
            <ul className="list-disc list-inside space-y-1 pl-3 text-gray-700">
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
              <li>
                You agree to notify us immediately of any unauthorized use of
                your account.
              </li>
              <li>
                We reserve the right to suspend or terminate accounts at our
                discretion.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              6. Privacy
            </h2>
            <p>
              Your use of the Website is also governed by our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>{" "}
              which explains how we collect and use your information.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              7. Disclaimer of Warranties
            </h2>
            <p>
              The Website and its content are provided “as is” and “as
              available” without any warranties, express or implied. We do not
              guarantee that the Website will be uninterrupted, secure, or
              error-free.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              8. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, LoginAt Solutions Pvt.
              Ltd. shall not be liable for any indirect, incidental, or
              consequential damages arising from your use of the Website or
              services.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              9. Third-Party Links
            </h2>
            <p>
              Our Website may contain links to external websites. We are not
              responsible for the content or policies of such third-party sites.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              10. Governing Law
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of India, and any disputes shall be subject to the exclusive
              jurisdiction of the courts.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              11. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2 font-semibold text-[var(--accent-dark)]">
              📧 info@loginatsolution.com
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default TermsService