import BoxContainer from "../../../components/containers/box-container/BoxContainer";
import { members } from "../../../objects/team/team-members";

const AboutMeet = () => {
  return (
    <BoxContainer className="grid gap-20 grid-cols-1">
      <div className="my-auto col-span-full lg:flex flex-col items-center justify-center lg:text-center">
        <h2 className="text-3xl font-semibold text-primary">Meet the Team</h2>

        <p className="leading-relaxed max-w-180 mt-6 block">
          Gloomommy is brought to life by a passionate group of students
          committed to creating a positive impact. We combine our academic
          knowledge, creativity, and heartfelt empathy to provide a platform
          that truly supports mothers in need.
        </p>
      </div>

      <ul
        role="list"
        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-16 xl:col-span-full"
      >
        {members.map((person) => (
          <li key={person.name}>
            <div className="flex items-center gap-x-6">
              <img
                alt=""
                src={person.photoURL}
                className="size-16 object-cover object-center rounded-full"
              />
              <div>
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                  {person.name}
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Images of group members */}
    </BoxContainer>
  );
};

export default AboutMeet;
