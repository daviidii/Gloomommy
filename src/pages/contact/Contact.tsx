import BoxContainer from "../../components/containers/box-container/BoxContainer";
import SubpageContainer from "../../components/containers/subpage-container/SubpageContainer";
import { InputForm } from "../../components/forms/input-forms/InputForm";

const Contact: React.FC = () => {
  return (
    <SubpageContainer
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      title="Contacts"
    >
      <BoxContainer variant="900" className="p-4 w-full my-20">
        <form action="" className="grid grid-cols-1 gap-6">
          <div className="col-span-full">
            <InputForm label="Full name" placeholder="full name" />
          </div>
          <div className="col-span-full">
            <InputForm label="Email" placeholder="youremail@mail.com" />
          </div>
          <div className="col-span-full">
            <InputForm label="Phone" placeholder="0906 123 4567" />
          </div>
          <div className="col-span-full">
            <InputForm
              label="Message"
              placeholder="Your message..."
              textarea={true}
            />
          </div>
        </form>
      </BoxContainer>
    </SubpageContainer>
  );
};

export default Contact;
