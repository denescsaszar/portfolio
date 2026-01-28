import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudySection from "@/components/CaseStudySection";

export default function ZalandoCaseStudy() {
  return (
    <CaseStudyLayout
      title="Zalando"
      subtitle="Managed marketing and campaign operations across 15 European markets, coordinating seven-figure budgets and international teams."
      role="Campaign Operations Manager"
      timeline="2017 - 2019"
      industry="E-Commerce / Fashion"
    >
      <CaseStudySection title="Overview">
        <p>
          Zalando, Europe's leading online fashion platform, was scaling its
          marketing operations to support rapid growth across multiple markets.
          The challenge was maintaining brand consistency while adapting
          campaigns for local markets with different languages, cultures, and
          shopping behaviors.
        </p>
        <p>
          I joined the central marketing operations team to coordinate campaign
          execution across 15 European markets, managing relationships with
          local teams, agencies, and technology vendors.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Challenge">
        <p>
          Operating at Zalando's scale meant managing complexity across multiple
          dimensions: 15 markets with different languages, dozens of agency
          partners, multiple marketing channels, and campaigns running
          simultaneously with budgets exceeding €2 million per quarter.
        </p>
        <p>
          The existing workflow relied heavily on email and spreadsheets,
          leading to version control issues, missed deadlines, and inconsistent
          brand execution across markets.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Approach">
        <p>
          I started by mapping the entire campaign lifecycle — from briefing
          through execution to reporting. This revealed bottlenecks in the
          approval process and gaps in communication between central and local
          teams.
        </p>
        <p>
          Working with stakeholders, I designed a new workflow that centralized
          asset management, standardized briefing templates, and created clear
          approval gates. We implemented project management tooling to replace
          email chains and spreadsheets.
        </p>
        <p>
          For budget management, I built a tracking system that gave real-time
          visibility into spend across markets and channels, enabling faster
          reallocation decisions when campaigns over or underperformed.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Solution">
        <p>
          The new operations framework included standardized campaign templates,
          a centralized digital asset management system, and automated reporting
          dashboards. Local teams retained flexibility for market adaptation
          while working within brand guidelines.
        </p>
        <p>
          We also established a "campaign war room" process for major seasonal
          events like Black Friday, bringing together all stakeholders for
          real-time coordination and rapid decision-making.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Results">
        <p>
          The operational improvements delivered significant efficiency gains:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>40% reduction in campaign launch time</li>
          <li>€2M+ quarterly budgets managed with 98% accuracy</li>
          <li>Brand compliance improved from 76% to 94% across markets</li>
          <li>Team capacity increased by 25% without additional headcount</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Key Learnings">
        <p>
          This role taught me the importance of building scalable processes
          before scaling teams. The right systems and workflows multiplied team
          capacity far more effectively than adding people.
        </p>
        <p>
          I also learned to balance standardization with local flexibility.
          Markets needed room to adapt to local contexts, but within guardrails
          that protected brand consistency and operational efficiency.
        </p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
