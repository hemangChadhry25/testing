import * as React from "react";
import { cn } from "@/lib/utils";
import { X2 } from "../../icons";
const Close = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    className={cn(
      "  flex h-9 w-9 items-center justify-center  text-[#667085] focus-visible:outline-none",
      className
    )}
    {...props}
    ref={ref}
  >
    <X2 />
  </button>
));
Close.displayName = "Close";
export { Close };
