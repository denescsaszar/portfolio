import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyNav from "@/components/CaseStudyNav";

export default function ZalandoCaseStudy() {
  return (
    <CaseStudyLayout
      title="Zalando"
      subtitle="Launched physical gift cards across 15 European markets, drove +20% revenue through product redesign, and coordinated with retail partners at 50K+ points of sale."
      role="Product Manager, Retail Gift Cards"
      timeline="Jun 2015 - May 2017"
      industry="E-Commerce / Fashion"
    >
      <CaseStudySection title="Overview">
        <p>
          At Zalando, I was responsible for the retail gift card program across
          15 European markets. This covered the full product lifecycle: launching
          physical gift cards at over 50,000 points of sale, redesigning the
          product based on customer research, and expanding the retail partner
          network.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Challenge">
        <p>
          Rolling out a physical gift card program across 15 countries meant
          dealing with different retail partners, languages, packaging
          requirements, and POS systems in every market. Each country had its
          own logistics, regulatory landscape, and customer expectations.
        </p>
        <p>
          The existing gift card design was outdated and not aligned with
          Zalando&apos;s brand evolution. Sales had plateaued, and there was no
          data-driven approach to understanding what customers actually wanted
          from the product.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Approach">
        <p>
          For the multi-market launch, I coordinated between internal teams
          (IT, Product Management, Marketing) and external retail partners to
          ensure consistent quality and timely rollout across all 15 markets.
        </p>
        <p>
          For the redesign, I conducted market research including surveys and
          focus groups with REWE customers to analyze customer preferences and
          identify what drove purchase decisions. I created user stories and
          product concepts based on the research findings.
        </p>
        <p>
          I worked closely with the design team to incorporate research insights
          into the final gift card design, then planned and executed
          point-of-sale campaigns in stores to promote the new design across
          markets.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Results">
        <p>
          The combined launch and redesign effort delivered strong results:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Gift cards launched across 15 European markets (50K+ POS)</li>
          <li>+20% revenue growth from product redesign and retail expansion</li>
          <li>
            Customer research directly shaped product decisions through surveys
            and focus groups
          </li>
          <li>
            Strengthened Zalando&apos;s position as a leading gift card provider
            in Europe
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Key Learnings">
        <p>
          Scaling a product across 15 markets taught me that international
          rollouts are about adapting to local needs while keeping the core
          experience consistent. Every market had its own retail landscape and
          customer expectations.
        </p>
        <p>
          The redesign project showed the value of making product decisions
          based on actual customer research rather than assumptions. The surveys
          and focus groups revealed preferences that none of us had predicted,
          and the +20% revenue growth validated the approach.
        </p>
      </CaseStudySection>

      <CaseStudyNav
        prev={{
          title: "Deutsche Bank",
          href: "/case-studies/deutsche-bank",
        }}
        next={{
          title: "idealo",
          href: "/case-studies/idealo",
        }}
      />
    </CaseStudyLayout>
  );
}
