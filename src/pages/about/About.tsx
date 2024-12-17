import SubpageContainer from "../../components/containers/subpage-container/SubpageContainer";
import AboutMore from "./about-more/AboutMore";
import AboutOurMission from "./about-our-mission/AboutOurMission";
import AboutMeet from "./about-team/AboutMeet";
import AboutWhySection from "./about-why/AboutWhySection";

const About: React.FC = () => {
  return (
    <SubpageContainer
      title={
        <>
          We are <span className="italic">gloomommy</span>
        </>
      }
      description="Gloomommy is intended to support women, particularly mothers dealing with postpartum disorders. By offering helpful advice, this website aims to help mothers better manage their emotions, recognize the signs of Postpartum Depression, and get the support they need."
    >
      <div className="space-y-20 mt-8">
        {/* Section: Our Mission */}
        <AboutOurMission />
        {/* Section: More About Us */}
        <AboutMore />

        {/* Section: Why Gloomommy? */}
        <AboutWhySection />

        {/* Section: Meet the Team */}
        <AboutMeet />
      </div>
    </SubpageContainer>
  );
};

export default About;
