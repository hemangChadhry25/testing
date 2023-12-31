import { cn } from "@/lib/utils";

export const PlayIcon = ({
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
        d="M3.33325 2L12.6666 8L3.33325 14V2Z"
        stroke="#667085"
        strokeWidth="1.31486"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
