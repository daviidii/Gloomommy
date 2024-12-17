import { Button } from "../../components/buttons/Button";
import BoxContainer from "../../components/containers/box-container/BoxContainer";
import SubpageContainer from "../../components/containers/subpage-container/SubpageContainer";

const Resources = () => {
  return (
    <SubpageContainer
      title="Resources"
      description="Gloomommy offers a diverse range of resources designed to support mothers navigating the challenges of postpartum depression (PPD) and related experiences. These resources are tailored to empower, educate, and foster a sense of community"
    >
      <BoxContainer variant="900" className="space-y-20">
        <section className="flex flex-col gap-6 lg:flex-row">
          <div className="space-y-6 lg:basis-1/2 my-auto">
            <h2 className="text-2xl">Articles</h2>
            <p className="font-light">
              Discover in-depth articles covering various topics to help you
              navigate parenthood and mental well-being.
            </p>
            <Button href="/resources/articles" className="inline-block">
              View articles
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden lg:basis-1/2">
            <img
              src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image of books, articles, etc."
              className="h-full w-full object-cover object-center"
            />
          </div>
        </section>
        <section className="flex flex-col gap-6  lg:flex-row-reverse">
          <div className="space-y-6 lg:basis-1/2 my-auto">
            <h2 className="text-2xl">Videos</h2>
            <p className="font-light">
              Watch helpful videos that provide actionable tips and emotional
              support for new moms.
            </p>
            <Button href="/resources/videos" className="inline-block">
              View videos
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden lg:basis-1/2">
            <img
              src="https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image of books, articles, etc."
              className="h-full w-full object-cover object-center"
            />
          </div>
        </section>
        <section className="flex flex-col gap-6  lg:flex-row">
          <div className="space-y-6 lg:basis-1/2 my-auto">
            <h2 className="text-2xl">Webinars</h2>
            <p className="font-light">
              Join live or recorded webinars hosted by experts in maternal
              health and wellness.
            </p>
            <Button href="/resources/webinars" className="inline-block">
              View webinars
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden lg:basis-1/2">
            <img
              src="https://images.unsplash.com/photo-1642522342822-6263588e198b?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image of books, articles, etc."
              className="h-full w-full object-cover object-center"
            />
          </div>
        </section>
      </BoxContainer>
    </SubpageContainer>
  );
};

export default Resources;
