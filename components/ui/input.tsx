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
          [
            "aria-[invalid=true]:error-icon-background-image input-helper-icon-position",
            "h-10 w-full border-b border-edge-strong-01 bg-layer-01 px-4 text-foreground-primary body-01",
            "placeholder:text-foreground-placeholder read-only:border-gray-20 read-only:bg-transparent",
            "focus-visible:border-focus focus-visible:shadow-input focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:border-transparent disabled:bg-layer-01 disabled:text-opacity-25",
            "aria-[invalid=true]:border-support-error aria-[invalid=true]:shadow-input-invalid focus-visible:aria-[invalid=true]:border-focus focus-visible:aria-[invalid=true]:shadow-input",
          ],
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
