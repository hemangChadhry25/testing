import { cn } from "@/lib/utils";

export const Star = ({
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
        d="M7.99943 1.33331L10.0594 5.50665L14.6661 6.17998L11.3328 9.42665L12.1194 14.0133L7.99943 11.8466L3.87943 14.0133L4.6661 9.42665L1.33276 6.17998L5.93943 5.50665L7.99943 1.33331Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
