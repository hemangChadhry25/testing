import { cn } from "@/lib/utils";

export const PublishedIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("", className)}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M0.666748 8.50033C0.666748 8.50033 3.33341 3.16699 8.00008 3.16699C12.6667 3.16699 15.3334 8.50033 15.3334 8.50033C15.3334 8.50033 12.6667 13.8337 8.00008 13.8337C3.33341 13.8337 0.666748 8.50033 0.666748 8.50033Z"
        stroke="#667085"
        strokeWidth="1.31486"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00008 10.5003C9.10465 10.5003 10.0001 9.60489 10.0001 8.50033C10.0001 7.39576 9.10465 6.50033 8.00008 6.50033C6.89551 6.50033 6.00008 7.39576 6.00008 8.50033C6.00008 9.60489 6.89551 10.5003 8.00008 10.5003Z"
        stroke="#667085"
        strokeWidth="1.31486"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
