import CompanyHistory from "../components/about/CompanyHistory";
import ContactInfo from "../components/about/ContactInfo";
import OurFleet from "../components/about/OurFleet";
import OurTeam from "../components/about/OurTeam";
import ValuesCommitment from "../components/about/ValuesCommitment";

const About = () => {
  return (
    <div className="px-12 mt-20">
      <CompanyHistory />
      <OurTeam />
      <OurFleet />
      <ValuesCommitment />
      <ContactInfo />
    </div>
  );
};

export default About;
