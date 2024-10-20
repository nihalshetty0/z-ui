import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  [
    "aria-[invalid=true]:error-icon-background-image input-helper-icon-position",
    "w-full border-b border-edge-strong-01 bg-layer-01 px-4 text-foreground-primary body-01",
    "placeholder:text-foreground-placeholder read-only:border-edge-subtle-00 read-only:bg-transparent",
    "focus-visible:border-focus focus-visible:shadow-input focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:border-transparent disabled:bg-layer-01 disabled:text-foreground-secondary",
    "aria-[invalid=true]:border-support-error aria-[invalid=true]:shadow-input-invalid focus-visible:aria-[invalid=true]:border-focus focus-visible:aria-[invalid=true]:shadow-input",
  ],
  {
    variants: {
      inputSize: {
        sm: "h-8",
        md: "h-10",
        lg: "h-12",
      },
    },
    defaultVariants: {
      inputSize: "md",
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ inputSize, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
