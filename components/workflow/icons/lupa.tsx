import { cn } from "@/lib/utils";

export const Lupa = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("", className)}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.9999 13L10.0999 10.1M11.6665 6.33333C11.6665 9.27885 9.27873 11.6667 6.33321 11.6667C3.38769 11.6667 0.999878 9.27885 0.999878 6.33333C0.999878 3.38781 3.38769 1 6.33321 1C9.27873 1 11.6665 3.38781 11.6665 6.33333Z"
        stroke="#98A2B3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
