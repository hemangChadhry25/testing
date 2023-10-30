import { cn } from "@/lib/utils";

export const User = ({
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
        d="M13.3333 14V12.6667C13.3333 11.9594 13.0524 11.2811 12.5523 10.781C12.0522 10.281 11.3739 10 10.6667 10H5.33332C4.62608 10 3.9478 10.281 3.4477 10.781C2.94761 11.2811 2.66666 11.9594 2.66666 12.6667V14M10.6667 4.66667C10.6667 6.13943 9.47275 7.33333 7.99999 7.33333C6.52723 7.33333 5.33332 6.13943 5.33332 4.66667C5.33332 3.19391 6.52723 2 7.99999 2C9.47275 2 10.6667 3.19391 10.6667 4.66667Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
