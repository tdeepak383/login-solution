import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen  text-gray-800 px-6 md:px-20">
      <div className="max-w-6xl mx-auto  py-5 md:py-10">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--pink)] mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">
            Last updated: <span className="font-semibold">{new Date().toLocaleDateString()}</span>
          </p>
        </header>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-10">
          At{" "}
          <span className="font-semibold text-[var(--pink)]">
            LoginAt Solutions Pvt. Ltd.
          </span>{" "}
          , your privacy is important to us.
          This Privacy Policy explains how we collect, use, disclose, and
          protect your information when you visit our website{" "}
          <a
            href="https://www.loginatsolution.com"
            className="text-blue-600 hover:underline"
          >
            www.loginatsolution.com
          </a>{" "}
           or use our services.
          By accessing or using our Website, you consent to the practices
          described in this Privacy Policy.
        </p>

        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information to provide and improve our services. This
              may include:
            </p>
            <h3 className="font-medium text-lg mb-1 text-[var(--accent-dark)]">
              a. Personal Information
            </h3>
            <p className="mb-2">
              When you fill out forms, subscribe to newsletters, apply for jobs,
              or contact us, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-3 text-gray-700 mb-4">
              <li>Name, email address, and phone number</li>
              <li>Company name and job title</li>
              <li>Resume/CV or professional details (if applying for a role)</li>
              <li>Communication content and preferences</li>
            </ul>

            <h3 className="font-medium text-lg mb-1 text-[var(--accent-dark)]">
              b. Non-Personal Information
            </h3>
            <p className="mb-2">
              Automatically collected data when you use our Website, such as:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-3 text-gray-700">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited, time spent, and clickstream data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">We may use the collected information to:</p>
            <ul className="list-disc list-inside space-y-1 pl-3 text-gray-700">
              <li>Provide, operate, and improve our services</li>
              <li>Respond to your inquiries or service requests</li>
              <li>Evaluate job applications and candidate profiles</li>
              <li>
                Send marketing or promotional communications (only with consent)
              </li>
              <li>Improve Website functionality and user experience</li>
              <li>Comply with legal obligations or enforce agreements</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              3. Cookies and Tracking Technologies
            </h2>
            <p>
              Our Website may use cookies, web beacons, and analytics tools
              (like Google Analytics) to enhance your browsing experience. You
              can control cookie preferences through your browser settings.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              4. Data Sharing and Disclosure
            </h2>
            <p className="mb-3">
              We do not sell or rent your personal data. We may share
              information only in the following cases:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-3 text-gray-700">
              <li>
                With service providers who assist in operating our Website or
                delivering services (under confidentiality agreements)
              </li>
              <li>
                With business partners or clients for legitimate business or
                recruitment purposes (with your consent)
              </li>
              <li>
                For legal reasons, when required by law or to protect our rights
                and security
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your information from unauthorized access, alteration,
              disclosure, or destruction. However, no system can be completely
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              6. Data Retention
            </h2>
            <p>
              We retain your information only as long as necessary for the
              purposes stated in this policy, or as required by law.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              7. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-3 text-gray-700 mb-3">
              <li>Access and request a copy of your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Object to processing or request data portability</li>
            </ul>
            <p>
              To exercise your rights, please contact us at{" "}
              <span className="font-semibold text-[var(--accent-dark)]">
                privacy@loginatsolution.com
              </span>
              .
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              8. Third-Party Links
            </h2>
            <p>
              Our Website may contain links to external websites. We are not
              responsible for their privacy practices or content. Please review
              their privacy policies before providing any information.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              9. Children’s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under 18 years of
              age, and we do not knowingly collect personal data from them.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[var(--pink)]">
              10. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
