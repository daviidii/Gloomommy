import SubpageContainer from "../../components/containers/subpage-container/SubpageContainer";
import BoxContainer from "../../components/containers/box-container/BoxContainer";

const AboutPostpartum = () => {
  return (
    <SubpageContainer
      title={
        <>
          What is <span className="italic">Postpartum Depression</span>?
        </>
      }
      description="Postpartum depression is a form of depression that occurs after
            delivering a baby, affecting up to 15% of new parents. Symptoms can
            include emotional extremes, exhaustion, guilt, and anxiety, which
            may hinder the ability to care for oneself and one’s baby.
            Fortunately, postpartum depression can be effectively treated
            through counseling and medication."
    >
      <div className="space-y-20 mt-20">
        {/* Section: Impact of Postpartum */}
        <BoxContainer variant="900">
          <h2 className="text-3xl font-semibold text-primary">
            The Impact of Postpartum
          </h2>
          <p className="font-light mt-4 leading-relaxed">
            The postpartum period is divided into three stages: the acute phase
            (6-12 hours after birth), subacute phase (2-6 weeks), and delayed
            phase (up to 6 months). These stages can involve a variety of
            physical and emotional challenges, such as postpartum hemorrhage,
            cardiomyopathy, urinary incontinence, pelvic floor dysfunction, and
            even postpartum depression. Recognizing and addressing these issues
            is essential for the well-being of both parent and baby.
          </p>
        </BoxContainer>

        {/* Section: Types of Postpartum Depression */}
        <BoxContainer variant="900">
          <h2 className="text-3xl font-semibold ">
            Types of Postpartum Depression
          </h2>
          <p className="mt-4 leading-relaxed">
            There are three types of postpartum depression:
          </p>
          <ul className="list-disc list-inside mt-4 font-light space-y-4">
            <li>
              <strong>Postpartum Blues:</strong> Common and typically resolving
              within two weeks without treatment.
            </li>
            <li>
              <strong>Postpartum Depression:</strong> Occurs within a week to a
              year after delivery and may require psychotherapy or
              antidepressants.
            </li>
            <li>
              <strong>Postpartum Psychosis:</strong> A rare but severe condition
              that can involve delusions, paranoia, and suicidal thoughts,
              necessitating immediate medical intervention.
            </li>
          </ul>
        </BoxContainer>

        {/* Section: Symptoms */}
        <BoxContainer variant="900">
          <h2 className="text-3xl font-semibold text-primary">Symptoms</h2>
          <p className="font-light mt-4 leading-relaxed">
            Symptoms of postpartum depression can include feelings of sadness,
            changes in appetite, trouble sleeping, loss of energy, feelings of
            guilt or worthlessness, difficulty concentrating, and thoughts of
            self-harm or harming the baby. These symptoms can vary in severity
            and may lead to feelings of isolation and shame if not addressed.
          </p>
        </BoxContainer>

        {/* Section: When to Seek Help */}
        <BoxContainer variant="900">
          <h2 className="text-3xl font-semibold ">
            When Should You Contact Your Doctor?
          </h2>
          <p className="font-light mt-4 leading-relaxed">
            Seek medical attention if you experience symptoms for more than two
            weeks, have thoughts of self-harm or harming your child, or feel
            overwhelmed to the point where you cannot care for your baby. Early
            intervention is key to recovery.
          </p>
        </BoxContainer>

        {/* Section: For Fathers and Co-Parents */}
        <BoxContainer variant="900">
          <h2 className="text-3xl font-semibold text-primary">
            For Fathers and Co-Parents
          </h2>
          <p className="font-light mt-4 leading-relaxed">
            Postpartum depression doesn’t only affect mothers. Fathers and
            co-parents may also experience symptoms such as irritability,
            frustration, and fatigue. Studies show that up to 10% of fathers
            experience postpartum depression within the first year of their
            child’s birth. Recognizing these signs and seeking support is vital
            for the health of the entire family.
          </p>
        </BoxContainer>
      </div>
    </SubpageContainer>
  );
};

export default AboutPostpartum;
