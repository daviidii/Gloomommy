import { useEffect, useRef, useState } from "react";
import ctaDoctorsImage from "../../../assets/images/ctaDoctorsImage.jpg";
import { Button } from "../../buttons/Button";

const HomeCta: React.FC = () => {
  const headerCurveBorderRef = useRef<HTMLDivElement>(null);
  const [contentMarginY, setcontentMarginY] = useState<number>(0);

  const updateMarginY = () => {
    if (headerCurveBorderRef.current) {
      setcontentMarginY(headerCurveBorderRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    // Initially set paddingTop when the component mounts
    updateMarginY();

    // Set up the resize event listener
    window.addEventListener("resize", updateMarginY);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateMarginY);
    };
  }, []);

  return (
    <section
      className="relative"
      style={{
        marginTop: `${contentMarginY}px`,
        marginBottom: `${contentMarginY}px`,
      }}
    >
      {/* top */}
      <div
        ref={headerCurveBorderRef}
        className="fill-surfaceVariant absolute bottom-[calc(100%_-_.5rem)] lg:bottom-[calc(100%_-_1rem)] w-full"
      >
        <svg id="Layer_2" data-name="Layer 2" viewBox="0 0 1440 176">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="299.04"
              y1="362.38"
              x2="299.04"
              y2="363.22"
              gradientTransform="translate(-3444181 75631.17) scale(11520 -208.22)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#000" />
              <stop offset="1" stopColor="#000" />
            </linearGradient>
          </defs>
          <g id="wave">
            <path
              className="cls-1"
              d="M1440,176H0V0l80,22c80,22,240,66,400,80.7,160,14.3,320,.3,480-18.4,160-18.3,320-40.3,480-44"
            />
          </g>
        </svg>
      </div>

      {/* content */}
      <div className="bg-surfaceVariant text-onSurfaceVariant min-h-100 p-10">
        <div className="flex flex-col lg:flex-row lg:items-center max-w-max mx-auto gap-6">
          <div className="space-y-6 max-w-180">
            <h3 className="text-2xl">Find out more about our doctors</h3>
            <p className="text-sm font-light">
              Postpartum depression is tough, but you don’t have to face it
              alone. Seeking professional help is a brave and important step
              toward healing and reclaiming joy.
            </p>
            <div>
              <Button
                href="/our-doctors"
                variant="primary"
                className="inline-block"
              >
                Find a doctor
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden max-w-180">
            <img
              src={ctaDoctorsImage}
              alt="psychiatrist talking to a patient"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="fill-surfaceVariant absolute top-[calc(100%-_.5rem)] lg:top-[calc(100%-_1rem)] w-full">
        <svg id="Layer_2" data-name="Layer 2" viewBox="0 0 1440 176.03">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="299.04"
              y1="406.17"
              x2="299.04"
              y2="407.01"
              gradientTransform="translate(3445635.38 -84494.85) rotate(-180) scale(11520 -208.22)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#000" />
              <stop offset="1" stopColor="#000" />
            </linearGradient>
          </defs>
          <g id="wave">
            <path
              className="cls-1"
              d="M0,0c160,0,320,0,480,.01,160,0,320,0,480,.01,160,0,320,0,400,0h80s0,176,0,176l-80-22c-80-22-240-66.01-400-80.71-160-14.3-320-.31-480,18.39C320,110.01,160,132,0,135.7"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default HomeCta;
