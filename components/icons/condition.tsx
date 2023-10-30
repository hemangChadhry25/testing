import { cn } from "@/lib/utils";

export const Condition = ({
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
      <g clipPath="url(#clip0_1288_33323)">
        <path
          d="M13.8333 4.6665H7.16659C3.94492 4.6665 1.33325 7.27818 1.33325 10.4998C1.33325 13.7215 3.94492 16.3332 7.16659 16.3332H13.8333C17.0549 16.3332 19.6666 13.7215 19.6666 10.4998C19.6666 7.27818 17.0549 4.6665 13.8333 4.6665Z"
          stroke="#306CFE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.16659 12.9998C8.5473 12.9998 9.66659 11.8805 9.66659 10.4998C9.66659 9.11913 8.5473 7.99984 7.16659 7.99984C5.78587 7.99984 4.66659 9.11913 4.66659 10.4998C4.66659 11.8805 5.78587 12.9998 7.16659 12.9998Z"
          stroke="#306CFE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1288_33323">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
