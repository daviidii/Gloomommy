import { forwardRef, ReactNode, useEffect, useRef, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";

interface BoxContainerProp {
  children: ReactNode;
  className?: string;
  variant?: "default" | "plain";
  size?: "default" | "sm" | "md" | "plain";
}

export const boxContainerVariants = cva("relative ", {
  variants: {
    variant: {
      default:
        "bg-primaryContainer text-onPrimaryContainer fill-primaryContainer",
      plain: "",
    },
    size: {
      default: "",
      md: "",
      sm: "",
      plain: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const SelectForm = forwardRef<HTMLDivElement, BoxContainerProp>(
  ({ children, className, variant, size, ...props }, ref) => {
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
      <div
        style={{
          marginTop: `${contentMarginY}px`,
          marginBottom: `${contentMarginY}px`,
        }}
      >
        <div
          {...props}
          ref={ref}
          className={cn(boxContainerVariants({ variant, size, className }))}
        >
          <div
            ref={headerCurveBorderRef}
            className="z-10 absolute bottom-[calc(100%_-_.5rem)] lg:bottom-[calc(100%_-_1rem)] w-full"
          >
            <svg
              id="wave"
              style={{ transform: "rotate(0deg)", transition: "0.3s" }}
              viewBox="0 0 1440 160"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" />
                  <stop offset="100%" />
                </linearGradient>
              </defs>
              <path
                style={{ transform: "translate(0, 0px)", opacity: 1 }}
                d="M0,64L80,66.7C160,69,320,75,480,88C640,101,800,123,960,125.3C1120,128,1280,112,1440,106.7C1600,101,1760,107,1920,114.7C2080,123,2240,133,2400,133.3C2560,133,2720,123,2880,101.3C3040,80,3200,48,3360,48C3520,48,3680,80,3840,82.7C4000,85,4160,59,4320,42.7C4480,27,4640,21,4800,18.7C4960,16,5120,16,5280,21.3C5440,27,5600,37,5760,37.3C5920,37,6080,27,6240,40C6400,53,6560,91,6720,90.7C6880,91,7040,53,7200,50.7C7360,48,7520,80,7680,96C7840,112,8000,112,8160,112C8320,112,8480,112,8640,101.3C8800,91,8960,69,9120,61.3C9280,53,9440,59,9600,50.7C9760,43,9920,21,10080,26.7C10240,32,10400,64,10560,85.3C10720,107,10880,117,11040,114.7C11200,112,11360,96,11440,88L11520,80L11520,160L11440,160C11360,160,11200,160,11040,160C10880,160,10720,160,10560,160C10400,160,10240,160,10080,160C9920,160,9760,160,9600,160C9440,160,9280,160,9120,160C8960,160,8800,160,8640,160C8480,160,8320,160,8160,160C8000,160,7840,160,7680,160C7520,160,7360,160,7200,160C7040,160,6880,160,6720,160C6560,160,6400,160,6240,160C6080,160,5920,160,5760,160C5600,160,5440,160,5280,160C5120,160,4960,160,4800,160C4640,160,4480,160,4320,160C4160,160,4000,160,3840,160C3680,160,3520,160,3360,160C3200,160,3040,160,2880,160C2720,160,2560,160,2400,160C2240,160,2080,160,1920,160C1760,160,1600,160,1440,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"
              />
            </svg>
          </div>

          {children}

          <div className="z-10 absolute top-[calc(100%-_.5rem)] lg:top-[calc(100%-_1rem)] w-full">
            <svg
              id="wave"
              style={{ transform: "rotate(180deg)", transition: "0.3s" }}
              viewBox="0 0 1440 160"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{ transform: "translate(0, 0px)", opacity: 1 }}
                d="M0,0L80,18.7C160,37,320,75,480,88C640,101,800,91,960,80C1120,69,1280,59,1440,58.7C1600,59,1760,69,1920,69.3C2080,69,2240,59,2400,53.3C2560,48,2720,48,2880,50.7C3040,53,3200,59,3360,58.7C3520,59,3680,53,3840,64C4000,75,4160,101,4320,112C4480,123,4640,117,4800,117.3C4960,117,5120,123,5280,104C5440,85,5600,43,5760,24C5920,5,6080,11,6240,21.3C6400,32,6560,48,6720,45.3C6880,43,7040,21,7200,34.7C7360,48,7520,96,7680,120C7840,144,8000,144,8160,125.3C8320,107,8480,69,8640,45.3C8800,21,8960,11,9120,8C9280,5,9440,11,9600,24C9760,37,9920,59,10080,74.7C10240,91,10400,101,10560,101.3C10720,101,10880,91,11040,96C11200,101,11360,123,11440,133.3L11520,144L11520,160L11440,160C11360,160,11200,160,11040,160C10880,160,10720,160,10560,160C10400,160,10240,160,10080,160C9920,160,9760,160,9600,160C9440,160,9280,160,9120,160C8960,160,8800,160,8640,160C8480,160,8320,160,8160,160C8000,160,7840,160,7680,160C7520,160,7360,160,7200,160C7040,160,6880,160,6720,160C6560,160,6400,160,6240,160C6080,160,5920,160,5760,160C5600,160,5440,160,5280,160C5120,160,4960,160,4800,160C4640,160,4480,160,4320,160C4160,160,4000,160,3840,160C3680,160,3520,160,3360,160C3200,160,3040,160,2880,160C2720,160,2560,160,2400,160C2240,160,2080,160,1920,160C1760,160,1600,160,1440,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
);

export default SelectForm;
