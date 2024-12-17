import { forwardRef, ReactNode } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

const firstTextVariant = {
  initial: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const secondTextVariant = {
  initial: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 30,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const buttonVariants = cva("min-w-max rounded-lg font-semibold font-inria", {
  variants: {
    variant: {
      default: "bg-primaryContainer text-onPrimaryContainer",
      primary: "bg-primary text-onPrimary",
      secondary: "",
      tertiary: "bg-tertiaryContainer text-onTertiaryContainer",
      inverse: "",
      outline: "bg-background text-onBackground ring-1 ring-primaryContainer",
      plain: "bg-transparent",
      accordion: "",
      link: "",
      filterBtn: "",
      square: "rounded-none",
      full: "",
    },
    size: {
      default: "py-2.5 px-8",
      xs: "",
      sm: "px-4 py-1.5",
      md: "",
      lg: "",
      xl: "",
      plain: "p-0",

      accordion: "",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  subChild?: ReactNode;
  animated?: boolean;
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "plain"
    | "inverse"
    | "accordion"
    | "link"
    | "filterBtn"
    | "primary"
    | "tertiary"
    | "full"
    | "secondary"
    | "square";
  size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "plain" | "accordion";

  href?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    { children, subChild, animated, className, variant, href, size, ...props },
    ref
  ) => {
    const buttonClass = cn(buttonVariants({ variant, size, className }));

    if (href) {
      return (
        <Link to={href} className={buttonClass}>
          {children}
        </Link>
      );
    }

    if (animated) {
      return (
        <AnimatePresence>
          <motion.button
            initial="initial"
            whileHover="hover"
            animate="animate"
            className={buttonClass}
            ref={ref as React.Ref<HTMLButtonElement>}
            {...props}
          >
            <div className="overflow-hidden relative ">
              <motion.p
                variants={firstTextVariant}
                className="text-onPrimaryContainer"
              >
                {children}
              </motion.p>
              <motion.p
                variants={secondTextVariant}
                aria-hidden
                className="absolute top-0 left-0 text-onPrimaryContainer w-full text-center"
              >
                {subChild ? subChild : children}
              </motion.p>
            </div>
          </motion.button>
        </AnimatePresence>
      );
    }

    return (
      <motion.button
        className={buttonClass}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

export { Button, buttonVariants };
