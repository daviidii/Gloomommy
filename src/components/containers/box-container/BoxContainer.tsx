import { forwardRef, ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";

interface BoxContainerProp {
  children: ReactNode;
  className?: string;
  variant?: "default" | "plain" | "400" | "900";
  size?: "default" | "sm" | "md" | "plain";
}

export const boxContainerVariants = cva("", {
  variants: {
    variant: {
      default: "lg:container",
      "900": "max-w-4xl mx-auto",
      "400": "max-w-100 mx-auto",
      plain: "",
    },
    size: {
      default: "px-10",
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

const BoxContainer = forwardRef<HTMLDivElement, BoxContainerProp>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <section
        ref={ref}
        {...props}
        className={cn(boxContainerVariants({ variant, size, className }))}
      >
        {children}
      </section>
    );
  }
);

export default BoxContainer;
