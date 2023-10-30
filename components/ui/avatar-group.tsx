"use client";

import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn, getValidChildren } from "@/lib/utils";

const avatarGroupVariants = cva("inline-flex items-center justify-center", {
  variants: {
    size: {
      xs: "-space-x-1",
      sm: "-space-x-1.5",
      md: "-space-x-2",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

const excessVariants = cva(
  "relative inline-flex items-center justify-center rounded-full font-medium bg-white border-2 border-primary-500 text-primary-500",
  {
    variants: {
      size: {
        xs: "text-[11px] leading-5 h-6 w-6",
        sm: "text-sm h-8 w-8",
        md: "text-base leading-5 h-10 w-10",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
);

interface AvatarGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarGroupVariants> {
  max?: number;
  excessClassName?: string;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, max = 5, size, excessClassName, ...props }, ref) => {
    const validChildren = getValidChildren(children);

    const totalChildren = validChildren.length;
    const excess = totalChildren > max ? totalChildren - max : 0;

    const childrenWithinMax =
      max != null ? validChildren.slice(0, max) : validChildren;
    const reversedChildren = childrenWithinMax.reverse();

    return (
      <div
        className={cn(avatarGroupVariants({ size, className }))}
        {...props}
        ref={ref}
      >
        {reversedChildren}
        {excess !== 0 && (
          <span
            className={excessVariants({ size, className: excessClassName })}
          >
            +{excess}
          </span>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup };
