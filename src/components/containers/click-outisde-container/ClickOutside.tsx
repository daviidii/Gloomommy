import React, { ReactNode, useEffect, useRef } from "react";

interface ClickOutsideProps {
  children: ReactNode;
  exceptionRef?: React.RefObject<HTMLElement>;
  onClick: () => void;
  className?: string;
}

const ClickOutside: React.FC<ClickOutsideProps> = ({
  children,
  exceptionRef,
  onClick,
  className,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickListener = (e: MouseEvent) => {
      let ClickedInside: boolean | null = false;

      // Check if the click was inside the form or the exceptionRef (which could be the form)
      if (exceptionRef) {
        // This checks if the click was inside either the wrapperRef or exceptionRef
        ClickedInside =
          (wrapperRef.current &&
            wrapperRef.current.contains(e.target as Node)) ||
          (exceptionRef.current &&
            exceptionRef.current.contains(e.target as Node));
      } else {
        // If no exceptionRef is provided, just check the wrapperRef
        ClickedInside =
          wrapperRef.current && wrapperRef.current.contains(e.target as Node);
      }

      if (!ClickedInside) onClick();
    };

    document.addEventListener("mousedown", handleClickListener);

    return () => {
      document.removeEventListener("mousedown", handleClickListener);
    };
  }, [exceptionRef, onClick]);

  return (
    <div ref={wrapperRef} className={`${className || ""}`}>
      {children}
    </div>
  );
};

export default ClickOutside;
