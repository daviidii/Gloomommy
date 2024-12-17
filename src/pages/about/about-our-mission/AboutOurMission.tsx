import OurMissionImage from "../../../assets/images/about-mission-image.jpg";
import { Button } from "../../../components/buttons/Button";
import BoxContainer from "../../../components/containers/box-container/BoxContainer";

const AboutOurMission = () => {
  return (
    <div>
      <BoxContainer className="flex flex-col gap-6 lg:flex-row-reverse lg:gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-primary">Our Mission</h2>
          <p className="mt-4 leading-relaxed font-light">
            At Gloomommy, our mission is to shed light on the often-overlooked
            struggles of postpartum depression. We strive to empower women with
            knowledge, inspire confidence, and foster a sense of belonging
            through our platform. By creating a space for mothers to connect,
            learn, and heal, we hope to make a meaningful difference in their
            lives.
          </p>
          <Button href="our_philosophy" className="inline-block">
            Learn More
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={OurMissionImage}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </BoxContainer>
    </div>
  );
};

export default AboutOurMission;
