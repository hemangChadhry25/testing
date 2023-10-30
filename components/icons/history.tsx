import { cn } from "@/lib/utils";

export const History = ({
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
        d="M15.1333 8.99982L13.8004 7.66648L12.4666 8.99982M14 7.99982C14 11.3135 11.3137 13.9998 8 13.9998C4.68629 13.9998 2 11.3135 2 7.99982C2 4.68611 4.68629 1.99982 8 1.99982C10.2013 1.99982 12.1257 3.18524 13.1697 4.95254M8 4.66648V7.99982L10 9.33315"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
