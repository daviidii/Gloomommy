import { Button } from "../../../components/buttons/Button";
import homeAboutImage from "../../../assets/images/homeAboutImage.jpg";

const HomeAbout = () => {
  return (
    <section className="mt-10">
      <div className="lg:container px-10 space-y-10">
        <div className="space-y-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-xl">
              With Gloomommy, you are never alone on this path. We understand
              the physical, emotional, and psychological complexities of
              motherhood, especially during the postpartum period.
            </h3>

            <div className="shrink-0">
              <Button href="/about" size="sm">
                Learn more
              </Button>
            </div>
          </div>
          <div>
            <p className="font-light text-sm">
              Our mission is to enlighten and support women by offering
              resources on postpartum depression, self-care strategies, and
              recovery options. We aim to foster an environment where women feel
              validated and understood, offering a haven of knowledge and
              connection to those navigating the often-overlooked struggles of
              postpartum.
            </p>
          </div>
        </div>
        <div className="max-w-230 h-100 mx-auto overflow-hidden rounded-lg">
          <img
            src={homeAboutImage}
            alt="home about section image"
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
