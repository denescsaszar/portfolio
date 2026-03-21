import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyNav from "@/components/CaseStudyNav";

export default function GoogleAldiCaseStudy() {
  return (
    <CaseStudyLayout
      title="Google & Apple Gift Cards"
      subtitle="Managed the introduction of an innovative digital gift card format across ALDI Nord, S&uuml;d, ALDI Suisse, and Hofer, working directly with Google's Operations Manager in Mountain View."
      role="Product Manager, DACH Market at InComm"
      timeline="Jun 2017 - Sep 2020"
      industry="E-Commerce / Retail"
    >
      <CaseStudySection title="Overview">
        <p>
          At InComm, I managed international integration projects with Apple,
          Google, Amazon, and Microsoft. The flagship project was introducing a
          worldwide new digital gift card format across ALDI and Hofer stores in
          the DACH region. Customers receive a PIN directly printed on the cash
          register receipt, eliminating the need for physical gift cards.
        </p>
        <p>
          Online sales of digital gift cards were additionally introduced in
          Switzerland. This format set new standards in retail globally.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Challenge">
        <p>
          This was a completely new format that had never been done before. It
          required linking cash register systems with backend infrastructure
          across multiple retailers (ALDI Nord, ALDI S&uuml;d, ALDI Suisse, Hofer)
          in different countries, each with their own POS systems and technical
          requirements.
        </p>
        <p>
          Coordinating between Google&apos;s team in Mountain View and local retail
          operations in Germany, Austria, and Switzerland added complexity in
          terms of time zones, communication, and aligning on technical
          specifications.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Approach">
        <p>
          I collaborated closely with Google&apos;s Operations Manager in Mountain
          View using an agile approach to develop the technical concept for
          the new digital format. Regular syncs ensured both sides stayed
          aligned on requirements and timelines.
        </p>
        <p>
          I managed the end-to-end project implementation, including API
          integration and linking cash register systems with backend
          infrastructure for Google, ALDI, ALDI Suisse, and Hofer.
        </p>
        <p>
          I coordinated with internal and external stakeholders to ensure
          technical and organizational requirements were met, and conducted
          tests and quality controls to guarantee a smooth customer experience
          before launch.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Results">
        <p>
          The project delivered a globally unique format:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            Successful market launch across ALDI Nord, ALDI S&uuml;d, ALDI Suisse,
            and Hofer
          </li>
          <li>
            Worldwide first: PIN printed directly on cash register receipt
          </li>
          <li>
            Additional online sales channel launched in Switzerland
          </li>
          <li>
            Set new standards in digital retail for gift card distribution
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Other Projects at InComm">
        <p>
          Beyond the Google/ALDI project, I also rolled out gift card programs
          across Swiss Rail, PaySafe, and other platforms, and managed
          integration projects with Apple, Amazon, and Microsoft across the
          DACH market.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Key Learnings">
        <p>
          Working directly with Google&apos;s team in Mountain View taught me how
          to manage cross-company, cross-timezone projects where agile
          collaboration and clear documentation are essential.
        </p>
        <p>
          Launching a format that had never existed before meant there was no
          playbook. We had to figure out the technical approach, test
          extensively, and coordinate across multiple retailers simultaneously.
          That experience gave me confidence in managing ambiguity and complex
          technical projects.
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
