"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { isInvalid?: boolean }
>(({ className, isInvalid, ...props }, ref) => (
  <input
    className={cn(
      "  ms-2 h-8 w-full  border-0 bg-white  text-base text-gray-black  outline-none placeholder:text-gray-500  invalid:pr-11  focus:ring-0    disabled:cursor-not-allowed disabled:opacity-50",
      {
        "border-error-300 focus:border-error-300 focus:ring-error-100":
          isInvalid,
      },
      className
    )}
    ref={ref}
    {...props}
  />
));
(Input as any).id = "Input";
Input.displayName = "Input";
