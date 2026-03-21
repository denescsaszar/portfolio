import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyNav from "@/components/CaseStudyNav";

export default function DeutscheBankCaseStudy() {
  return (
    <CaseStudyLayout
      title="Deutsche Bank"
      subtitle="Supported Deutsche Bank in introducing digital gift cards on their platform, with Zalando integrated as an essential partner."
      role="Product Manager"
      timeline="2016 - 2017"
      industry="Financial Services / E-Commerce"
    >
      <CaseStudySection title="Overview">
        <p>
          Deutsche Bank wanted to introduce digital gift cards on their
          platform. Zalando was integrated as an essential partner to enhance
          the offering&apos;s attractiveness. I coordinated the project from
          Zalando&apos;s side, working closely with the Deutsche Bank project
          manager to define requirements and drive product development.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Challenge">
        <p>
          Integrating two large organizations with different technical
          architectures, internal processes, and timelines required careful
          coordination. The API integration between Deutsche Bank and
          Zalando&apos;s IT team needed to be seamless for the end customer while
          meeting both companies&apos; security and compliance requirements.
        </p>
        <p>
          Internally at Zalando, the project required alignment across IT,
          Product Management, and Marketing teams, each with their own
          priorities and roadmaps.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Approach">
        <p>
          I collaborated closely with the Deutsche Bank project manager to
          define requirements and align on the technical approach. Together we
          established a shared roadmap and regular sync points to keep both
          sides on track.
        </p>
        <p>
          On Zalando&apos;s side, I coordinated the API integration with our IT
          team, ensuring the technical implementation met Deutsche Bank&apos;s
          specifications while fitting into Zalando&apos;s existing gift card
          infrastructure.
        </p>
        <p>
          I managed internal coordination processes between Zalando teams and
          external partners, making sure all stakeholders were aligned on
          requirements, timelines, and deliverables.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Solution">
        <p>
          The API integration connected Deutsche Bank&apos;s platform with
          Zalando&apos;s gift card system, enabling Deutsche Bank customers to
          purchase and redeem Zalando digital gift cards directly through
          the bank&apos;s platform.
        </p>
        <p>
          The implementation was designed for a seamless customer experience,
          with the technical complexity handled behind the scenes through
          well-defined API contracts between both organizations.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Results">
        <p>The project delivered a successful partnership:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            Successful launch of digital gift cards on the Deutsche Bank
            platform
          </li>
          <li>
            Seamless API integration between Deutsche Bank and Zalando systems
          </li>
          <li>
            Strengthened the strategic partnership between both companies
          </li>
          <li>
            Customers gained a seamless digital gift card purchase experience
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Key Learnings">
        <p>
          This project taught me how to manage cross-company integrations where
          you don&apos;t control both sides. Clear communication, shared
          documentation, and regular alignment between project managers on
          both sides were essential.
        </p>
        <p>
          I also learned the importance of managing internal stakeholders just
          as carefully as external ones. Getting buy-in from IT, Product, and
          Marketing teams at Zalando required understanding each team&apos;s
          priorities and framing the project in terms they cared about.
        </p>
      </CaseStudySection>

      <CaseStudyNav
        prev={{
          title: "Google & Apple",
          href: "/case-studies/google-aldi",
        }}
        next={{
          title: "Zalando",
          href: "/case-studies/zalando",
        }}
      />
    </CaseStudyLayout>
  );
}
