import { cn } from "@/lib/utils";

export const Zap = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-[17px]", className)}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.86657 1.3335L2.19995 9.33344H8.19991L7.53325 14.6667L14.1999 6.66679H8.19991L8.86657 1.3335Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
