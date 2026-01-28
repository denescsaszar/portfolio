import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyNav from "@/components/CaseStudyNav";

export default function DeutscheBankCaseStudy() {
  return (
    <CaseStudyLayout
      title="Deutsche Bank"
      subtitle="Managed digital transformation initiatives for retail banking products, improving customer onboarding and reducing processing time."
      role="Project Manager"
      timeline="2019 - 2021"
      industry="Financial Services"
    >
      <CaseStudySection title="Overview">
        <p>
          Deutsche Bank was modernizing their retail banking digital experience
          to compete with neo-banks and improve customer satisfaction. The
          initiative focused on streamlining account opening, loan applications,
          and customer service workflows.
        </p>
        <p>
          I joined as Project Manager to coordinate cross-functional teams,
          manage vendor relationships, and ensure timely delivery of digital
          banking features across web and mobile platforms.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Challenge">
        <p>
          Legacy systems posed significant integration challenges. The existing
          infrastructure was built on decades-old technology, making it
          difficult to implement modern user experiences without extensive
          backend modifications.
        </p>
        <p>
          Regulatory compliance added complexity — every feature required
          approval from legal, risk, and compliance teams across multiple
          jurisdictions. This created bottlenecks that threatened project
          timelines.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Approach">
        <p>
          I established a governance framework that brought compliance teams
          into the process earlier, shifting from approval gates to continuous
          collaboration. This reduced review cycles from weeks to days.
        </p>
        <p>
          For technical integration, I worked with architects to design an API
          layer that abstracted legacy systems, allowing frontend teams to build
          modern experiences without direct dependencies on old infrastructure.
        </p>
        <p>
          We adopted an agile methodology with two-week sprints, daily standups,
          and bi-weekly stakeholder demos. This visibility helped manage
          expectations and surface blockers early.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Solution">
        <p>
          The new digital onboarding flow reduced account opening from 5 days to
          under 10 minutes for eligible customers. We implemented real-time ID
          verification, automated credit checks, and e-signature capabilities.
        </p>
        <p>
          A unified customer dashboard gave users visibility into all their
          products — accounts, loans, investments — with self-service options
          that previously required branch visits or phone calls.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Results">
        <p>The digital transformation delivered measurable business impact:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>72% reduction in account opening time</li>
          <li>34% increase in digital-first customer acquisition</li>
          <li>28% decrease in call center volume for routine inquiries</li>
          <li>NPS improvement from 32 to 51 within 12 months</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Key Learnings">
        <p>
          Working in a heavily regulated environment taught me the importance of
          treating compliance as a partner, not a gatekeeper. Early involvement
          and clear communication transformed potential blockers into enablers.
        </p>
        <p>
          I also learned that legacy modernization is as much about people and
          processes as it is about technology. Change management and stakeholder
          alignment were critical success factors.
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
