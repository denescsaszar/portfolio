import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyNav from "@/components/CaseStudyNav";

export default function ZalandoApiCaseStudy() {
  return (
    <CaseStudyLayout
      title="Zalando Gift Card API"
      subtitle="Coordinated and supported the development of a new gift card API for Zalando, enabling more efficient gift card management and integration across various sales channels."
      role="Product Manager"
      timeline="2016 - 2017"
      industry="E-Commerce / API Development"
    >
      <CaseStudySection title="Overview">
        <p>
          Zalando needed a new gift card API to replace legacy processes and
          enable more efficient gift card management across multiple sales
          channels and external partner platforms. I coordinated the end-to-end
          development effort between Zalando&apos;s IT team, service providers, and
          external partners.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Challenge">
        <p>
          The existing gift card infrastructure was fragmented across different
          systems and sales channels. Managing gift cards across retail partners,
          online platforms, and external integrations required manual
          coordination and lacked a unified API layer.
        </p>
        <p>
          The new API needed to integrate with Zalando&apos;s existing systems while
          also supporting external partner platforms, each with their own
          technical requirements and constraints.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Approach">
        <p>
          I supported the IT team in conceptualizing the gift card API using
          design thinking methodology. We started with a feasibility study to
          assess the technical implementation options and identify potential
          risks early.
        </p>
        <p>
          I led collaboration with service providers and external partners to
          review the technical feasibility of the new API. This involved
          aligning multiple stakeholders on requirements, integration points,
          and timelines.
        </p>
        <p>
          Throughout the project, I coordinated between internal teams and
          external partners to ensure all technical requirements and integration
          points were met, while keeping the project on track.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Solution">
        <p>
          The new gift card API provided a unified interface for gift card
          management and delivery across multiple platforms. It integrated with
          Zalando&apos;s existing systems and supported external partner platforms
          through standardized endpoints.
        </p>
        <p>
          We conducted thorough tests and quality controls to ensure smooth
          technical implementation before rolling out to production.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Results">
        <p>
          The project delivered a scalable API solution:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            Unified gift card API replacing fragmented legacy processes
          </li>
          <li>
            Successful integration with Zalando&apos;s existing systems and external
            partner platforms
          </li>
          <li>
            More efficient gift card management and delivery across multiple
            sales channels
          </li>
          <li>
            Design thinking approach and feasibility study reduced rework and
            technical risk
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Key Learnings">
        <p>
          This project taught me how product managers and engineering teams can
          collaborate effectively when both sides understand each other&apos;s
          constraints. Running a feasibility study and using design thinking up
          front saved significant rework later in the project.
        </p>
        <p>
          Coordinating between internal IT, external service providers, and
          partner platforms required clear communication and structured
          alignment processes. Getting all stakeholders on the same page early
          was critical to the project&apos;s success.
        </p>
        <p className="mt-6">
          <a
            href="https://engineering.zalando.com/posts/2018/04/improving-efficiency-offline-campaigns.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coral hover:text-foreground transition-colors"
          >
            Further project information on the Zalando Engineering Blog &rarr;
          </a>
        </p>
      </CaseStudySection>

      <CaseStudyNav
        prev={{
          title: "Google & Apple",
          href: "/case-studies/google-aldi",
        }}
        next={{
          title: "idealo",
          href: "/case-studies/idealo",
        }}
      />
    </CaseStudyLayout>
  );
}
