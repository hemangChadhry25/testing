"use client";

import * as React from "react";

import { useInputGroupContext } from "./input-group";
import { cn } from "@/lib/utils";

const InputRightElement = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { fieldHeight } = useInputGroupContext();

  return (
    <div
      className={cn(
        "absolute inset-y-0 right-0 my-auto flex items-center justify-center peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      style={{
        height: fieldHeight,
        width: fieldHeight,
      }}
      ref={ref}
      {...props}
    />
  );
});

(InputRightElement as any).id = "InputRightElement";

InputRightElement.displayName = "InputRightElement";

const InputLeftElement = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { fieldHeight } = useInputGroupContext();

  return (
    <div
      className={cn(
        "absolute inset-y-0 left-0 my-auto flex items-center justify-center peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      style={{
        height: fieldHeight,
        width: fieldHeight,
      }}
      ref={ref}
      {...props}
    />
  );
});

(InputLeftElement as any).id = "InputLeftElement";

InputLeftElement.displayName = "InputLeftElement";

export { InputLeftElement, InputRightElement };
