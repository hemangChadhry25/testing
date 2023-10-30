import { cn } from "@/lib/utils";

export const ArrowDownToLine = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.9998 13.9999H1.99976M11.9998 7.33327L7.99976 11.3333M7.99976 11.3333L3.99976 7.33327M7.99976 11.3333V1.99994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
