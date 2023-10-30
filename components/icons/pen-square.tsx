import { cn } from "@/lib/utils";

export const PenSquare = ({
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
      <g clipPath="url(#clip0_1505_6630)">
        <path
          d="M7.3335 2.66666H2.66683C2.31321 2.66666 1.97407 2.80713 1.72402 3.05718C1.47397 3.30723 1.3335 3.64637 1.3335 3.99999V13.3333C1.3335 13.6869 1.47397 14.0261 1.72402 14.2761C1.97407 14.5262 2.31321 14.6667 2.66683 14.6667H12.0002C12.3538 14.6667 12.6929 14.5262 12.943 14.2761C13.193 14.0261 13.3335 13.6869 13.3335 13.3333V8.66666M12.3335 1.66666C12.5987 1.40144 12.9584 1.25244 13.3335 1.25244C13.7086 1.25244 14.0683 1.40144 14.3335 1.66666C14.5987 1.93187 14.7477 2.29158 14.7477 2.66666C14.7477 3.04173 14.5987 3.40144 14.3335 3.66666L8.00016 9.99999L5.3335 10.6667L6.00016 7.99999L12.3335 1.66666Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1505_6630">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
