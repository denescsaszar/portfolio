import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyNav from "@/components/CaseStudyNav";

export default function IdealoCaseStudy() {
  return (
    <CaseStudyLayout
      title="idealo"
      subtitle="Coordinated technical integration and partner rollout for one of Europe's leading price comparison platforms, enabling seamless API connectivity."
      role="Project Manager"
      timeline="2022 - 2023"
      industry="E-Commerce / Price Comparison"
    >
      <CaseStudySection title="Overview">
        <p>
          idealo, one of Europe's largest price comparison platforms, needed to
          onboard new retail partners through their API integration program. The
          challenge was streamlining the technical onboarding process while
          maintaining data quality and platform reliability.
        </p>
        <p>
          As Project Manager, I coordinated between internal engineering teams,
          external partners, and product stakeholders to deliver a scalable
          integration framework.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Challenge">
        <p>
          Partner onboarding was a bottleneck. Each integration required custom
          development work, extensive back-and-forth communication, and manual
          data validation. The average time from contract signing to live
          integration was 12 weeks.
        </p>
        <p>
          Data quality varied significantly between partners, leading to
          inconsistent product listings and customer complaints about outdated
          prices or unavailable items.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Approach">
        <p>
          I mapped the entire partner journey from initial contact through
          successful integration, identifying friction points and opportunities
          for standardization. This revealed that 70% of delays came from
          unclear documentation and inconsistent API requirements.
        </p>
        <p>
          Working with engineering, I helped design a self-service onboarding
          portal with interactive API documentation, automated data validation,
          and real-time integration status tracking.
        </p>
        <p>
          For partner communication, I established a structured onboarding
          program with weekly check-ins, clear milestones, and escalation paths
          for technical blockers.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Solution">
        <p>
          The new integration framework included standardized API contracts,
          automated testing environments, and a partner dashboard showing
          real-time data quality metrics. Partners could now validate their
          integration independently before going live.
        </p>
        <p>
          We also implemented automated monitoring that flagged data quality
          issues early, allowing partners to fix problems before they impacted
          customers.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Results">
        <p>
          The streamlined onboarding process delivered measurable improvements:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Integration time reduced from 12 weeks to 4 weeks average</li>
          <li>Partner satisfaction scores increased by 35%</li>
          <li>Data quality issues reduced by 60%</li>
          <li>Support ticket volume decreased by 40%</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Key Learnings">
        <p>
          This project reinforced the value of investing in developer
          experience. Clear documentation and self-service tools not only
          accelerated onboarding but also reduced support burden and improved
          partner relationships.
        </p>
        <p>
          I also learned that process improvements often have compounding
          effects — faster onboarding meant more partners, which meant more
          data, which improved the platform for end users.
        </p>
      </CaseStudySection>

      <CaseStudyNav
        prev={{
          title: "Zalando",
          href: "/case-studies/zalando",
        }}
        next={{
          title: "Google & Apple",
          href: "/case-studies/google-aldi",
        }}
      />
    </CaseStudyLayout>
  );
}
