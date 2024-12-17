import SubpageContainer from "../../components/containers/subpage-container/SubpageContainer";
import BoxContainer from "../../components/containers/box-container/BoxContainer";

import image1 from "../../assets/images/philosophy-page/image1.jpg";
import image2 from "../../assets/images/philosophy-page/image2.jpg";
import image3 from "../../assets/images/philosophy-page/image3.jpg";
import image4 from "../../assets/images/philosophy-page/image4.jpg";

const AboutPhilosophy = () => {
  return (
    <SubpageContainer
      title="Our Philosophy"
      description="At Gloomommy, we believe that every mother deserves to feel supported, understood, and empowered during one of the most transformative periods of her life. Our philosophy is rooted in compassion, education, and community, aiming to provide the tools and connections that help women embrace their postpartum journey with resilience and hope."
    >
      <div className="space-y-20 mt-20">
        {/* Section: Compassion First */}
        <BoxContainer className="flex flex-col lg:flex-row items-center gap-20">
          <div className="basis-1/2">
            <h2 className="text-2xl font-semibold text-primary">
              Compassion at the Core
            </h2>
            <p className="font-light mt-4 leading-relaxed">
              We understand that postpartum depression is a deeply personal
              experience, and every journey is unique. At the core of our
              philosophy lies an unwavering commitment to compassion. We strive
              to create a safe, non-judgmental space where mothers feel seen,
              heard, and supported as they navigate the challenges of
              postpartum.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden basis-1/2">
            <img
              src={image1}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </BoxContainer>

        {/* Section: Empower Through Knowledge */}
        <BoxContainer className="flex flex-col lg:flex-row-reverse items-center gap-20">
          <div className="basis-1/2">
            <h2 className="text-2xl font-semibold">
              Empowering Through Knowledge
            </h2>
            <p className="font-light mt-4 leading-relaxed">
              Knowledge is a powerful tool for healing and growth. Our platform
              is dedicated to providing medically approved, science-backed
              resources that help mothers and their loved ones understand
              postpartum depression. By breaking down complex information into
              accessible, actionable insights, we aim to empower users to take
              charge of their mental health and well-being.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden basis-1/2">
            <img
              src={image2}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </BoxContainer>

        {/* Section: Building a Supportive Community */}
        <BoxContainer className="flex flex-col lg:flex-row items-center gap-20">
          <div className="basis-1/2">
            <h2 className="text-2xl font-semibold text-primary">
              Building a Community of Belonging
            </h2>
            <p className="font-light mt-4 leading-relaxed">
              Isolation can be one of the most difficult aspects of postpartum
              depression. That’s why we place a strong emphasis on fostering a
              sense of belonging. Through our anonymous forums, shared stories,
              and interactive features, we aim to connect mothers with others
              who understand their journey, creating a network of support and
              solidarity.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden basis-1/2">
            <img
              src={image3}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </BoxContainer>

        {/* Section: A Holistic Approach */}
        <BoxContainer className="flex flex-col lg:flex-row-reverse items-center gap-20">
          <div className="basis-1/2">
            <h2 className="text-2xl font-semibold">
              A Holistic Approach to Wellness
            </h2>
            <p className="font-light mt-4 leading-relaxed">
              Postpartum depression affects both the mind and body. Our
              philosophy embraces a holistic approach to wellness, offering
              tools and resources that address the emotional, physical, and
              social aspects of postpartum health. From self-assessment forms
              and coping strategies to treatment guidelines and educational
              materials, we provide a comprehensive support system for mothers
              and their families.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden basis-1/2">
            <img
              src={image4}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </BoxContainer>
      </div>
    </SubpageContainer>
  );
};

export default AboutPhilosophy;
