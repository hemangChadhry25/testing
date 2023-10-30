import { cn } from "@/lib/utils";

export const TimeDelay = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M10.4998 8.4165V11.7498L12.5832 12.9998M10.4998 4.6665C6.58782 4.6665 3.4165 7.83782 3.4165 11.7498C3.4165 15.6619 6.58782 18.8332 10.4998 18.8332C14.4119 18.8332 17.5832 15.6619 17.5832 11.7498C17.5832 7.83782 14.4119 4.6665 10.4998 4.6665ZM10.4998 4.6665V2.1665M8.83317 2.1665H12.1665M17.4407 5.15987L16.1907 3.90987L16.8157 4.53487M3.55902 5.15987L4.80902 3.90987L4.18402 4.53487"
        stroke="#306CFE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
