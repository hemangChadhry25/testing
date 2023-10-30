import { cn } from "@/lib/utils";

export const MoreHorizontal = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[15px] w-4", className)}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.7002 8.125C8.04537 8.125 8.3252 7.84518 8.3252 7.5C8.3252 7.15482 8.04537 6.875 7.7002 6.875C7.35502 6.875 7.0752 7.15482 7.0752 7.5C7.0752 7.84518 7.35502 8.125 7.7002 8.125Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0752 8.125C12.4204 8.125 12.7002 7.84518 12.7002 7.5C12.7002 7.15482 12.4204 6.875 12.0752 6.875C11.73 6.875 11.4502 7.15482 11.4502 7.5C11.4502 7.84518 11.73 8.125 12.0752 8.125Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.3252 8.125C3.67037 8.125 3.9502 7.84518 3.9502 7.5C3.9502 7.15482 3.67037 6.875 3.3252 6.875C2.98002 6.875 2.7002 7.15482 2.7002 7.5C2.7002 7.84518 2.98002 8.125 3.3252 8.125Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
