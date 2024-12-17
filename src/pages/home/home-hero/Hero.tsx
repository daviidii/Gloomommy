import heroImage from "../../../assets/images/heroImage.jpg";

const Hero = () => {
  return (
    <section className="relative">
      <div className="z-1 absolute top-0 left-0 w-full h-full md:h-3/5 xl:h-3/4 bg-primary"></div>

      <div className="z-10 relative py-13.5 grid grid-cols-1 xl:grid-cols-2 place-items-center xl:place-items-start gap-7.5 xl:container px-10">
        <div className="col-span-full xl:col-span-1 flex text-onPrimary">
          <div className="border-t max-w-150 xl:max-w-100 pt-6 space-y-6 text-center xl:text-left">
            <h3 className="text-xl">
              Gloomommy is a compassionate online platform dedicated to
              supporting women experiencing postpartum depression (PPD).
            </h3>
            <div className="text-sm font-light">
              <p>
                Whether you’re a mom-to-be, new mom or an experienced mom,
                <span>
                  <strong>
                    <em>GlooMommy</em>
                  </strong>
                </span>{" "}
                is here for you! We aim to enlighten people about women
                experiencing postpartum depression. We seek to provide
                scientific knowledge, inspire self-appreciation, and create safe
                spaces for sharing experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block col-span-full xl:col-span-1 rounded-xl overflow-hidden">
          <img src={heroImage} alt="hero image" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
