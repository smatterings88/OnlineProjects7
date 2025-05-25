import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | OnlineProjects.website</title>
        <meta 
          name="description" 
          content="Learn about how OnlineProjects.website collects, uses, and protects your personal information."
        />
      </Helmet>
      
      <Hero
        title="Privacy Policy"
        subtitle="Last updated: March 17, 2025"
      />
      
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <p className="lead">
              At OnlineProjects.website, your privacy is our priority. This policy explains what information we collect, how we use it, when and with whom we share it, and the choices you have regarding your data.
            </p>

            <h2>1. Information We Collect</h2>
            
            <h3>a. Personal Information You Provide</h3>
            <p>When you interact with our site or services, you may choose to provide us with:</p>
            <ul>
              <li>Contact Details: Name, email address, phone number, company name</li>
              <li>Project Details: Requirements, budget, timelines</li>
              <li>Account Data: Username, password (encrypted)</li>
              <li>Communications: Newsletter subscription, support requests, quote inquiries</li>
            </ul>

            <h3>b. Automatically Collected Data</h3>
            <p>Each time you visit our website, we automatically log certain technical and behavioral information, including:</p>
            <ul>
              <li>Device & Browser: IP address, browser type/version, operating system</li>
              <li>Usage Data: Pages viewed, links clicked, time stamps, referral URLs</li>
              <li>Analytics: Aggregated, anonymous data to improve site performance</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We process your data to:</p>
            <ol>
              <li>Deliver Services: Set up accounts, fulfill your project requests, provide support</li>
              <li>Communicate: Respond to inquiries, send service notifications, request feedback</li>
              <li>Marketing (With Consent): Share newsletters, promotional offers, event invitations</li>
              <li>Optimize & Secure: Improve our website, troubleshoot issues, prevent fraud and abuse</li>
              <li>Legal Compliance: Meet regulatory or contractual obligations</li>
            </ol>

            <h2>3. Data Sharing & Disclosure</h2>
            <p>We do not sell or rent your personal information. We may share data only with:</p>
            <ul>
              <li>Service Partners: Payment processors, hosting providers, email platforms</li>
              <li>Professional Advisors: Legal, financial, or technical consultants under confidentiality</li>
              <li>Legal Authorities: When required by law, regulation, or to protect our rights</li>
            </ul>
            <p>All partners are bound by strict confidentiality and data-protection obligations.</p>

            <h2>4. Cookies & Tracking Technologies</h2>
            <p>We use cookies, web beacons, and similar technologies to:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Analyze site traffic and user behavior</li>
              <li>Deliver targeted content and advertising</li>
            </ul>
            <p>You can manage or disable cookies via your browser settings. Please note that disabling cookies may affect site functionality.</p>

            <h2>5. Your Rights & Choices</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access: Request a copy of your personal data</li>
              <li>Correction: Update or rectify inaccurate information</li>
              <li>Deletion: Ask us to erase your data (subject to legal retention requirements)</li>
              <li>Portability: Receive your data in a machine-readable format</li>
              <li>Opt-Out: Withdraw consent for marketing communications at any time</li>
            </ul>
            <p>To exercise any of these rights, please contact us at info@onlineprojects.website.</p>

            <h2>6. Data Retention & Security</h2>
            <ul>
              <li>Retention: We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, or as required by law.</li>
              <li>Security: We employ administrative, technical, and physical safeguards (encryption, access controls, secure servers) to protect your data. However, no online transmission is completely secure—please exercise caution when sharing sensitive information.</li>
            </ul>

            <h2>7. Children's Privacy</h2>
            <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from minors. If you believe we have inadvertently gathered such data, please contact us for prompt deletion.</p>

            <h2>8. International Data Transfers</h2>
            <p>Your information may be transferred to—and stored on—servers outside your country of residence. By using our services, you consent to such transfers, which are governed by appropriate safeguards (e.g., standard contractual clauses).</p>

            <h2>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. Whenever we do, we will revise the "Last updated" date above and post the revised policy here. Significant changes will be communicated via email or site notification.</p>

            <h2>10. Contact Us</h2>
            <p>For questions, concerns, or requests regarding this policy or your personal data, please reach out to:</p>
            <p>
              Email: <a href="mailto:info@onlineprojects.website">info@onlineprojects.website</a><br />
              Address: 5th Floor, Regus Skytech IT Park Building A, McArthur Highway, Mabalacat City, Pampanga 2010, Philippines
            </p>

            <p className="text-sm mt-8">Thank you for trusting OnlineProjects.website with your business. We are committed to safeguarding your privacy and ensuring a secure, transparent experience.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;