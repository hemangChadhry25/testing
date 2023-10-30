import { cn } from "@/lib/utils";

export const PausedIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("", className)}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.66667 2.66699H4V13.3337H6.66667V2.66699Z"
        stroke="#667085"
        strokeWidth="1.31486"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2.66699H9.33333V13.3337H12V2.66699Z"
        stroke="#667085"
        strokeWidth="1.31486"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
