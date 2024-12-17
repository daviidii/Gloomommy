import { useEffect, useRef, useState } from "react";
import { Button } from "../buttons/Button";

const ServicesCta: React.FC = () => {
  const headerCurveBorderRef = useRef<HTMLDivElement>(null);
  const [contentMarginTop, setcontentMarginTop] = useState<number>(0);

  const updatePaddingTop = () => {
    if (headerCurveBorderRef.current) {
      setcontentMarginTop(headerCurveBorderRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    // Initially set paddingTop when the component mounts
    updatePaddingTop();

    // Set up the resize event listener
    window.addEventListener("resize", updatePaddingTop);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updatePaddingTop);
    };
  }, []);

  return (
    <div
      className="relative"
      style={{ marginTop: `${contentMarginTop * 2}px` }}
    >
      <div
        ref={headerCurveBorderRef}
        className="fill-primary z-1 absolute bottom-[calc(100%_-_.5rem)] lg:bottom-[calc(100%_-_5rem)] left-0 w-full"
      >
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 81.7"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="299.02"
              y1="133.86"
              x2="299.02"
              y2="134.05"
              gradientTransform="translate(-5166421 60687.14) scale(17280 -452.74)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#000" />
              <stop offset="1" stopColor="#000" />
            </linearGradient>
          </defs>
          <g id="wave">
            <path
              className="cls-1"
              d="M1440,81.7H0v-49l120-8.2C240,16.7,480-.3,720,0c240-.3,480,16.7,720,24.5"
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10 bg-primary text-onPrimary min-h-40 py-10 space-y-4">
        <div className="text-4xl flex flex-col text-center lg:container px-4">
          <h2>
            Are you{" "}
            <span className="font-semibold italic">seeking support</span>?
          </h2>
          <h2>contact us.</h2>
        </div>
        <div className="flex justify-center items-center">
          <Button href="/help">seek help</Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCta;
