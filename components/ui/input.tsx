import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "aria-[invalid=true]:error-icon-background-image aria-[invalid=true]:shadow-input-invalid input-helper-icon-position focus-visible:shadow-input focus-visible:aria-[invalid=true]:shadow-input h-10 w-full border-b border-edge-strong-01 bg-layer-01 px-4 text-foreground-primary body-01 placeholder:text-foreground-placeholder read-only:border-gray-20 read-only:bg-transparent focus-visible:border-focus focus-visible:outline-none disabled:cursor-not-allowed disabled:border-transparent disabled:bg-layer-01 disabled:text-opacity-25 aria-[invalid=true]:border-support-error focus-visible:aria-[invalid=true]:border-focus",
          // TODO: add "warn-icon-background-image" class
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
