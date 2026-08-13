import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-[#F8FAFD] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-[#0b2149] rounded-3xl px-6 sm:px-10 py-10 text-white shadow-xl">
          <p className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest">
            AdvocateAssam
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            Terms & Conditions
          </h1>

          <p className="text-white/70 mt-3 text-sm">
            Last Updated: August 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white mt-6 rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10">

          <Section title="1. Acceptance of Terms">
            <p>
              Welcome to AdvocateAssam. These Terms & Conditions govern your
              access to and use of the AdvocateAssam website, applications,
              services, and related features.
            </p>

            <p>
              By accessing or using AdvocateAssam, you agree to be bound by
              these Terms & Conditions and our Privacy Policy. If you do not
              agree with these terms, you should not use the platform.
            </p>
          </Section>

          <Section title="2. About AdvocateAssam">

            <p>
              AdvocateAssam is a technology platform designed to facilitate
              connections between individuals seeking legal assistance and
              lawyers who choose to provide their services through the
              platform.
            </p>

            <p>
              AdvocateAssam itself is not a law firm and does not provide
              legal advice, legal representation, or legal opinions.
            </p>

            <p>
              The professional relationship concerning legal services is
              between the user and the selected lawyer.
            </p>

          </Section>

          <Section title="3. No Legal Advice">

            <p>
              Information available on AdvocateAssam, including lawyer
              profiles, descriptions, articles, general information, or other
              content, is provided for informational and platform-related
              purposes only.
            </p>

            <p>
              Nothing on the platform should be interpreted as legal advice,
              legal representation, or the creation of an advocate-client
              relationship with AdvocateAssam.
            </p>

            <p>
              Users should consult a qualified legal professional regarding
              their specific legal circumstances.
            </p>

          </Section>

          <Section title="4. User Accounts">

            <p>
              Certain features require you to create an account. You agree to
              provide accurate, complete, and current information when
              registering and to update your information when necessary.
            </p>

            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for activities conducted through your
              account.
            </p>

            <p>
              You should immediately notify AdvocateAssam if you believe your
              account has been accessed without authorization.
            </p>

          </Section>

          <Section title="5. Appointment Booking">

            <p>
              AdvocateAssam may allow users to browse lawyer profiles and
              request or book appointments based on available schedules.
            </p>

            <ul>
              <li>Appointment availability may change at any time.</li>
              <li>Users are responsible for selecting the correct lawyer, date, and time.</li>
              <li>Appointments may be cancelled subject to applicable platform policies.</li>
              <li>A lawyer may be unavailable or unable to provide services despite an appointment request.</li>
            </ul>

            <p>
              AdvocateAssam does not guarantee that an appointment will result
              in the provision of legal services or a particular legal
              outcome.
            </p>

          </Section>

          <Section title="6. Payments and Fees">

            <p>
              Certain appointments or services may require payment through
              the platform.
            </p>

            <p>
              Payments may be processed through third-party payment service
              providers. Users agree to provide accurate payment information
              and comply with the applicable payment provider's terms.
            </p>

            <p>
              Lawyer consultation fees are determined by the respective
              lawyer or as otherwise displayed on the platform.
            </p>

            <p>
              Refunds, cancellations, and payment disputes may be subject to
              the applicable booking terms and payment provider procedures.
            </p>

          </Section>

          <Section title="7. Lawyer Registration and Verification">

            <p>
              Lawyers seeking to use AdvocateAssam may be required to provide
              professional and identity-related information for verification.
            </p>

            <p>
              AdvocateAssam may review submitted information and documents
              before approving a lawyer profile.
            </p>

            <p>
              Verification indicates that information or documentation has
              been reviewed according to AdvocateAssam's applicable
              verification process. It does not constitute a guarantee of a
              lawyer's competence, conduct, legal advice, or outcome.
            </p>

          </Section>

          <Section title="8. User Responsibilities">

            <p>Users agree not to:</p>

            <ul>
              <li>Provide false, misleading, or fraudulent information.</li>
              <li>Impersonate another person or professional.</li>
              <li>Use the platform for unlawful purposes.</li>
              <li>Attempt to gain unauthorized access to accounts or systems.</li>
              <li>Upload malicious software or harmful content.</li>
              <li>Interfere with the operation or security of the platform.</li>
              <li>Misuse another user's personal or professional information.</li>
              <li>Use the platform to engage in fraudulent or abusive activities.</li>
            </ul>

          </Section>

          <Section title="9. User-Submitted Content">

            <p>
              Users may submit information, documents, messages, reviews, or
              other content through the platform.
            </p>

            <p>
              You represent that you have the necessary rights and
              authorization to submit such content and that it does not
              knowingly violate applicable law or the rights of another
              person.
            </p>

            <p>
              You should avoid uploading unnecessary sensitive personal
              information.
            </p>

          </Section>

          <Section title="10. Lawyer-Client Relationship">

            <p>
              AdvocateAssam provides technology infrastructure to facilitate
              interactions between users and lawyers.
            </p>

            <p>
              Any advocate-client relationship, legal engagement, advice,
              representation, fees, professional obligations, or legal
              strategy is solely between the user and the lawyer concerned.
            </p>

            <p>
              AdvocateAssam is not responsible for the professional advice,
              conduct, actions, omissions, or legal outcomes associated with a
              lawyer's services.
            </p>

          </Section>

          <Section title="11. Intellectual Property">

            <p>
              Unless otherwise stated, the AdvocateAssam name, logo, website
              design, software, graphics, text, interfaces, and other
              platform materials are owned by or licensed to AdvocateAssam
              and are protected by applicable intellectual property laws.
            </p>

            <p>
              You may not reproduce, modify, distribute, sell, reverse
              engineer, or commercially exploit platform materials without
              appropriate authorization.
            </p>

          </Section>

          <Section title="12. Third-Party Services">

            <p>
              AdvocateAssam may integrate or provide access to third-party
              services, including payment processors, communication services,
              cloud infrastructure, and external links.
            </p>

            <p>
              Third-party services are subject to their respective terms and
              policies. AdvocateAssam is not responsible for the independent
              operation, content, availability, or policies of third-party
              services.
            </p>

          </Section>

          <Section title="13. Platform Availability">

            <p>
              We aim to maintain reliable access to AdvocateAssam but do not
              guarantee uninterrupted, error-free, or continuously available
              operation.
            </p>

            <p>
              The platform may occasionally be unavailable because of
              maintenance, technical failures, security incidents, network
              issues, or circumstances beyond our reasonable control.
            </p>

          </Section>

          <Section title="14. Limitation of Liability">

            <p>
              To the extent permitted by applicable law, AdvocateAssam shall
              not be responsible for indirect, incidental, consequential, or
              special losses arising from the use of or inability to use the
              platform.
            </p>

            <p>
              AdvocateAssam does not guarantee the accuracy of every
              user-submitted or third-party-provided profile, statement,
              qualification, recommendation, or legal outcome.
            </p>

          </Section>

          <Section title="15. Suspension and Termination">

            <p>
              AdvocateAssam may suspend, restrict, or terminate an account or
              access to the platform where reasonably necessary, including
              for violation of these Terms, fraudulent activity, security
              concerns, misuse of the platform, or legal requirements.
            </p>

            <p>
              Users may discontinue their use of the platform at any time,
              subject to any outstanding obligations.
            </p>

          </Section>

          <Section title="16. Privacy">

            <p>
              Your use of AdvocateAssam is also governed by our Privacy
              Policy, which explains how personal information is collected,
              used, stored, and protected.
            </p>

          </Section>

          <Section title="17. Changes to These Terms">

            <p>
              AdvocateAssam may update these Terms & Conditions from time to
              time to reflect changes in the platform, business practices, or
              applicable legal requirements.
            </p>

            <p>
              Updated terms will be published on this page with a revised
              "Last Updated" date. Continued use of the platform after an
              update may constitute acceptance of the revised terms, subject
              to applicable law.
            </p>

          </Section>

          <Section title="18. Governing Law and Jurisdiction">

            <p>
              These Terms & Conditions shall be interpreted and governed in
              accordance with the applicable laws of India.
            </p>

            <p>
              Subject to applicable law, disputes arising in connection with
              these Terms or the use of AdvocateAssam shall be subject to the
              jurisdiction of the competent courts having authority over the
              relevant matter.
            </p>

          </Section>

          <Section title="19. Contact Us">

            <p>
              If you have questions regarding these Terms & Conditions,
              please contact AdvocateAssam through the contact information
              provided on the official website.
            </p>

          </Section>

        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => {
  return (
    <section className="pb-8 mb-8 border-b border-gray-100 last:border-0">
      <h2 className="text-xl sm:text-2xl font-bold text-[#0b2149] mb-4">
        {title}
      </h2>

      <div className="text-gray-600 text-sm sm:text-[15px] leading-7 space-y-4">
        {children}
      </div>

      <style>
        {`
          ul {
            list-style: disc;
            padding-left: 1.5rem;
            margin-top: 0.75rem;
          }

          li {
            margin-bottom: 0.4rem;
          }
        `}
      </style>
    </section>
  );
};

export default TermsAndConditions;