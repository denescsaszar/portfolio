import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyNav from "@/components/CaseStudyNav";

export default function GoogleAldiCaseStudy() {
  return (
    <CaseStudyLayout
      title="Google & Apple Gift Cards"
      subtitle="Led product strategy and B2B partnerships for a multi-platform digital gift card launch with Aldi, scaling to millions of transactions."
      role="Product Manager"
      timeline="2021 - 2022"
      industry="E-Commerce / Retail"
    >
      <CaseStudySection title="Overview">
        <p>
          Aldi sought to expand their digital product offerings by introducing
          Google Play and Apple App Store gift cards across their European
          retail network. This required building a scalable digital
          infrastructure, negotiating B2B partnerships, and coordinating a
          multi-market rollout.
        </p>
        <p>
          As Product Manager, I owned the end-to-end delivery — from initial
          scoping and partner negotiations through technical integration and
          go-to-market execution.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Challenge">
        <p>
          The core challenge was threefold: integrating with Google and Apple's
          complex gift card APIs, building a redemption system that could handle
          peak retail traffic, and coordinating launches across multiple
          European markets with different regulatory requirements.
        </p>
        <p>
          Additionally, Aldi's existing POS systems had limited digital product
          support, requiring custom integration work while maintaining their
          strict cost efficiency standards.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Approach">
        <p>
          I started by mapping the technical landscape — understanding the API
          requirements from both Google and Apple, identifying gaps in Aldi's
          current infrastructure, and scoping the integration effort.
        </p>
        <p>
          Working closely with engineering, I prioritized a phased rollout:
          Germany first as a pilot market, followed by Austria and Switzerland.
          This allowed us to validate the technical integration and refine
          operational processes before scaling.
        </p>
        <p>
          For the B2B partnerships, I led negotiations with both Google and
          Apple, aligning on commercial terms, technical SLAs, and marketing
          support. I also coordinated with Aldi's legal and compliance teams to
          ensure GDPR compliance across all markets.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Solution">
        <p>
          We built a lightweight middleware layer that connected Aldi's POS
          systems to Google and Apple's gift card APIs. This abstraction allowed
          us to handle the complexity of both platforms while presenting a
          unified interface to the retail systems.
        </p>
        <p>
          The system included real-time inventory management, automated
          reconciliation, and a monitoring dashboard for operations teams. We
          also implemented circuit breakers and fallback mechanisms to ensure
          reliability during peak shopping periods.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Results">
        <p>
          The platform launched successfully across DACH markets, processing
          over 2 million transactions in the first year. Key outcomes included:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>99.7% uptime during Black Friday and Christmas peaks</li>
          <li>45% reduction in settlement time vs. industry average</li>
          <li>Expanded to 3 additional European markets within 6 months</li>
          <li>Established framework for future digital product integrations</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Key Learnings">
        <p>
          This project reinforced the importance of phased rollouts when dealing
          with complex integrations. Starting with a single market allowed us to
          identify edge cases and optimize processes before scaling.
        </p>
        <p>
          I also learned the value of building strong relationships with
          external partners. Regular syncs with Google and Apple technical teams
          helped us anticipate API changes and resolve issues quickly.
        </p>
      </CaseStudySection>

      <CaseStudyNav
        prev={{
          title: "idealo",
          href: "/case-studies/idealo",
        }}
        next={{
          title: "Deutsche Bank",
          href: "/case-studies/deutsche-bank",
        }}
      />
    </CaseStudyLayout>
  );
}
