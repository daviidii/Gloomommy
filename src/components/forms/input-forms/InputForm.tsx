import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { MdOutlinePassword, MdOutlineRemoveRedEye } from "react-icons/md";
import { Button } from "../../buttons/Button";

const inputVariants = cva(
  "w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 ease-in-out placeholder:text-sm placeholder:font-normal text-sm disabled:bg-outline",
  {
    variants: {
      variant: {
        default: "bg-background text-onBackground",
        file: "",
        plain: "",
        checkbox: "",
      },
      size: {
        default: "px-4 py-2",
        md: "",
        sm: "",
        file: "",
        plain: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface InputFormProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  id: string;
  hasError: boolean;
  isPassword: boolean;
  textarea: boolean;
  variant: "default" | "file" | "plain" | "checkbox";
  variantSize: "default" | "md" | "sm" | "file" | "plain";
  isShowPassword: boolean;
  handleShowPassword: () => void;
  className: string;
}

const InputForm = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  Partial<InputFormProps>
>(
  (
    {
      className,
      label,
      id,
      hasError = false,
      isPassword = false,
      textarea = false,
      variant,
      variantSize,
      isShowPassword,
      handleShowPassword,
      ...props
    },
    ref
  ) => {
    if (textarea) {
      return (
        <>
          {label && (
            <label
              htmlFor={id}
              className="block mb-2 text-sm font-medium capitalize"
            >
              {label}
            </label>
          )}
          <div className="">
            <textarea
              id={id}
              className={cn(
                inputVariants({ variant, size: variantSize, className })
              )}
              rows={5}
              ref={ref as React.Ref<HTMLTextAreaElement>}
              {...props}
            ></textarea>
          </div>
        </>
      );
    }
    return (
      <>
        {label && (
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium capitalize"
          >
            {label}
          </label>
        )}
        <div
          className={`relative rounded-md ${
            hasError ? "border border-error" : ""
          }`}
        >
          <input
            id={id}
            className={cn(
              inputVariants({ variant, size: variantSize, className })
            )}
            ref={ref as React.Ref<HTMLInputElement>}
            {...props}
          />
          {isPassword && (
            <div className="absolute flex items-center right-0 top-0 h-full mx-4">
              <Button
                type="button"
                variant="plain"
                size="plain"
                onClick={handleShowPassword}
                className="focus:ring-0 focus:ring-transparent hover:bg-transparent dark:hover:bg-transparent"
              >
                {isShowPassword ? (
                  <MdOutlinePassword className="text-lg text-bodydark2" />
                ) : (
                  <MdOutlineRemoveRedEye className="text-lg text-bodydark2" />
                )}
              </Button>
            </div>
          )}
        </div>
      </>
    );
  }
);

export { InputForm, inputVariants };
