import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center rounded-2xl label-01 whitespace-nowrap ",
  {
    variants: {
      variant: {
        blue: "text-blue-80 bg-blue-20",
        red: "text-red-80 bg-red-20",
        magenta: "text-magenta-80 bg-magenta-20",
        purple: "text-purple-80 bg-purple-20",
        cyan: "text-cyan-80 bg-cyan-20",
        teal: "text-teal-80 bg-teal-20",
        green: "text-green-80 bg-green-20",
        gray: "text-gray-100 bg-gray-20",
        "cool-gray": "text-cool-gray-100 bg-cool-gray-20",
        "warm-gray": "text-warm-gray-100 bg-warm-gray-20",
        "high-contrast": "text-white bg-gray-80",
        outline: "text-gray-100 bg-white outline outline-1 outline-gray-100",
      },
      size: {
        sm: "px-2 h-[18px]",
        md: "px-2 h-6",
        lg: "px-3 h-8",
      },
    },
    defaultVariants: {
      variant: "blue",
      size: "md",
    },
  },
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

function Tag({ className, variant, size, ...props }: TagProps) {
  return (
    <div className={cn(tagVariants({ variant, size }), className)} {...props} />
  );
}

export { Tag, tagVariants };
