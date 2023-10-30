import { cn } from "@/lib/utils";

export const Message = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      // className={cn("h-4 w-4", className)}
    >
      <path
        d="M18.3332 4.99992C18.3332 4.08325 17.5832 3.33325 16.6665 3.33325H3.33317C2.4165 3.33325 1.6665 4.08325 1.6665 4.99992M18.3332 4.99992V14.9999C18.3332 15.9166 17.5832 16.6666 16.6665 16.6666H3.33317C2.4165 16.6666 1.6665 15.9166 1.6665 14.9999V4.99992M18.3332 4.99992L9.99984 10.8333L1.6665 4.99992"
        stroke="#306CFE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
