import BoxContainer from "../../../components/containers/box-container/BoxContainer";

const AboutWhySection = () => {
  return (
    <BoxContainer>
      <div className="lg:flex flex-col items-center space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Why Gloomommy?</h2>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>
            We provide science-backed resources to help mothers understand and
            navigate postpartum depression.
          </li>
          <li>
            We aim to create awareness about the importance of mental health
            during and after pregnancy.
          </li>
          <li>
            We foster a safe, supportive community for mothers to share their
            experiences and connect with others.
          </li>
          <li>
            We offer tools and resources for husbands and family members to
            better support mothers on this journey.
          </li>
        </ul>
      </div>
    </BoxContainer>
  );
};

export default AboutWhySection;
