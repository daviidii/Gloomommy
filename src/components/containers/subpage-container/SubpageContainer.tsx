import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface SubpageContainerProps {
  title: string | ReactElement;
  description: string | ReactElement;
  children: ReactNode;
}

const SubpageContainer: React.FC<SubpageContainerProps> = ({
  title,
  description,
  children,
}) => {
  const headerCurveBorderRef = useRef<HTMLDivElement>(null);
  const [contentPaddingTop, setContentPaddingTop] = useState<number>(0);

  const updatePaddingTop = () => {
    if (headerCurveBorderRef.current) {
      setContentPaddingTop(headerCurveBorderRef.current.offsetHeight);
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
    <div>
      <div className="relative bg-primaryContainer text-onPrimaryContainer px-2">
        <div className="z-9 relative min-h-40 flex items-center justify-center py-20 ">
          <div className="max-w-180 text-center space-y-6">
            <h2 className="text-4xl font-semibold">{title}</h2>
            <p className="text-sm leading-relaxed font-light">{description}</p>
          </div>
        </div>
        <div
          ref={headerCurveBorderRef}
          className="fill-primaryContainer z-1 absolute left-0 top-full xl:top-[calc(100%_-_2.5rem)] w-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
            <path
              fillOpacity="1"
              d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* content */}

      <div
        className="bg-background text-onBackground"
        style={{
          paddingTop: `${contentPaddingTop + 50}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SubpageContainer;
