import { cn } from "@/lib/utils";

export const ArrowsIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <path
        d="M17.1666 14.1667H3.83325M3.83325 14.1667L7.16659 10.8333M3.83325 14.1667L7.16658 17.5M3.83325 5.83333H17.1666M17.1666 5.83333L13.8333 2.5M17.1666 5.83333L13.8333 9.16667"
        stroke="#D0D5DD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
