import { cn } from "@/lib/utils";

export const Edit = ({
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
        d="M8 13.3336H14M11 2.33365C11.2652 2.06843 11.6249 1.91943 12 1.91943C12.1857 1.91943 12.3696 1.95601 12.5412 2.02708C12.7128 2.09816 12.8687 2.20233 13 2.33365C13.1313 2.46497 13.2355 2.62087 13.3066 2.79245C13.3776 2.96403 13.4142 3.14793 13.4142 3.33365C13.4142 3.51936 13.3776 3.70326 13.3066 3.87484C13.2355 4.04642 13.1313 4.20233 13 4.33365L4.66667 12.667L2 13.3336L2.66667 10.667L11 2.33365Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
