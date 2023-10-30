import { cn } from "@/lib/utils";

export const LogOut = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-[17px]", className)}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.19992 13.9999H3.53328C3.17966 13.9999 2.84052 13.8594 2.59047 13.6094C2.34043 13.3594 2.19995 13.0202 2.19995 12.6666V3.33332C2.19995 2.9797 2.34043 2.64057 2.59047 2.39052C2.84052 2.14047 3.17966 2 3.53328 2H6.19992M10.8666 11.3333L14.1999 7.99996M14.1999 7.99996L10.8666 4.66665M14.1999 7.99996H6.19992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
