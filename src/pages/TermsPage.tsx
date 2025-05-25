import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | OnlineProjects.website</title>
        <meta 
          name="description" 
          content="Read the terms and conditions for using OnlineProjects.website's services."
        />
      </Helmet>
      
      <Hero
        title="Terms of Service"
        subtitle="Last updated: May 24, 2025"
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
              These Terms of Service ("Terms") govern your access to and use of OnlineProjects.website ("Site") and any related services (collectively, the "Services") provided by OnlineProjects ("we," "us," or "our"). By accessing or using the Site or Services, you ("Client" or "you") agree to be bound by these Terms. If you do not agree, please do not use our Site or Services.
            </p>

            <h2>1. Definitions</h2>
            <ul>
              <li>"Agreement" means these Terms, together with any project proposal, statement of work, or addendum signed by both parties.</li>
              <li>"Deliverables" means any work product, code, designs, content, or other materials we create and deliver under this Agreement.</li>
              <li>"Client Materials" means any text, images, data, or other materials you provide to us for use in connection with the Services.</li>
            </ul>

            <h2>2. Services</h2>
            <ol>
              <li>Scope. We offer digital services including, but not limited to, web development, content creation, digital marketing, AI solutions, graphic design, and virtual assistant support.</li>
              <li>"As Is" Disclaimer. All Services are provided on an "as is" and "as available" basis, without any express or implied warranties.</li>
            </ol>

            <h2>3. Service Engagement & Project Proposals</h2>
            <ol>
              <li>Proposals. Each proposal or statement of work will detail the scope, timeline, deliverables, and fees. Proposals expire 30 days after issuance unless otherwise specified.</li>
              <li>Changes. Any change to scope, timeline, or cost must be agreed in writing via a change order.</li>
            </ol>

            <h2>4. Payment Terms</h2>
            <ol>
              <li>Deposit. A non-refundable deposit of 50% of the total project fee is required to begin work.</li>
              <li>Final Payment. The remaining balance is due upon completion and prior to delivery of final Deliverables.</li>
              <li>Retainers. For monthly retainer arrangements, fees are invoiced at the start of each billing cycle and are non-refundable.</li>
              <li>Late Payments. Unpaid amounts past due may incur interest at 1.5% per month, or the maximum rate permitted by law, whichever is lower.</li>
            </ol>

            <h2>5. Intellectual Property</h2>
            <ol>
              <li>Client Ownership. Upon receipt of full payment, we assign to you all intellectual property rights in the Deliverables, except for any pre-existing materials or third-party assets.</li>
              <li>Our Tools & Processes. We retain all rights to our proprietary tools, methodologies, software libraries, and templates.</li>
              <li>License to Client Materials. You grant us a non-exclusive, royalty-free license to use your Client Materials solely for providing the Services.</li>
            </ol>

            <h2>6. Client Obligations</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate, complete, and timely information, feedback, and approvals.</li>
              <li>Supply all necessary Client Materials and permissions for any third-party content.</li>
              <li>Designate a primary point of contact authorized to make decisions.</li>
              <li>Maintain confidentiality of all proposals, Deliverables drafts, and account access credentials.</li>
            </ul>

            <h2>7. Timeline & Delays</h2>
            <ol>
              <li>Estimated Dates. All dates provided are estimates.</li>
              <li>Delay Causes. We are not responsible for delays resulting from:</li>
            </ol>
            <ul>
              <li>Late client feedback or approvals</li>
              <li>Scope changes</li>
              <li>Third-party dependencies</li>
              <li>Force majeure events (e.g., natural disasters, acts of government)</li>
            </ul>

            <h2>8. Warranties & Disclaimers</h2>
            <ol>
              <li>Limited Warranty. We warrant that the Services will be performed in a professional manner consistent with industry standards.</li>
              <li>Exclusions. Except as expressly stated, we disclaim all other warranties, whether express or implied, including merchantability and fitness for a particular purpose.</li>
            </ol>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, neither party will be liable for indirect, incidental, special, or consequential damages. Our total aggregate liability under this Agreement shall not exceed the total fees paid by you in the six (6) months preceding the claim.
            </p>

            <h2>10. Termination</h2>
            <ol>
              <li>By Either Party. Either party may terminate this Agreement with 30 days' written notice.</li>
              <li>Effect of Termination. You remain responsible for all fees and expenses incurred through the termination date. Upon full payment, we will deliver any completed Deliverables.</li>
            </ol>

            <h2>11. Changes to These Terms</h2>
            <p>
              We may revise these Terms at any time by posting the updated version on our Site with a new "Last updated" date. Your continued use of the Site or Services after such changes constitutes acceptance of the revised Terms.
            </p>

            <h2>12. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the Republic of the Philippines, without regard to conflict of laws principles. Any dispute will be resolved in the courts of Pampanga, Philippines.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              For questions or notices under these Terms, please contact:<br />
              Email: <a href="mailto:info@onlineprojects.website">info@onlineprojects.website</a><br />
              Address: 5th Floor, Regus Skytech IT Park Building A, McArthur Highway, Mabalacat City, Pampanga 2010, Philippines
            </p>

            <p className="text-sm mt-8">
              Thank you for choosing OnlineProjects.website. We look forward to helping you achieve your digital goals!
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;