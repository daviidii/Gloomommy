import WbContainer1 from "../../../components/containers/wave-border-container/wbContainer1";
import BoxContainer from "../../../components/containers/box-container/BoxContainer";

const AboutMore = () => {
  return (
    <WbContainer1>
      <BoxContainer className="relative z-20 py-10">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            More About Us
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            We are a group of students from{" "}
            <span className="font-medium">
              Our Lady of Fatima University, Quezon City
            </span>
            , currently conducting research for our subject,{" "}
            <span className="italic">Introduction to Computer Psychology</span>.
            Our mission is to extend a helping hand to mothers navigating the
            challenges of postpartum depression, while also providing valuable
            insights for husbands and raising awareness among teenage girls
            about mental health challenges that can arise during and after
            pregnancy.
          </p>
        </div>
      </BoxContainer>
    </WbContainer1>
  );
};

export default AboutMore;
