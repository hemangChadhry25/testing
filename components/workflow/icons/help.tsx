import { cn } from "@/lib/utils";

export const HelpIcon = ({
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
      //   className="ml-2"
    >
      <g clipPath="url(#clip0_2423_24571)">
        <path
          d="M6.05992 5.99967C6.21665 5.55412 6.52602 5.17841 6.93322 4.9391C7.34042 4.69978 7.81918 4.6123 8.2847 4.69215C8.75022 4.772 9.17246 5.01402 9.47664 5.37536C9.78081 5.7367 9.94729 6.19402 9.94659 6.66634C9.94659 7.99967 7.94659 8.66634 7.94659 8.66634M7.99992 11.333H8.00659M14.6666 7.99967C14.6666 11.6816 11.6818 14.6663 7.99992 14.6663C4.31802 14.6663 1.33325 11.6816 1.33325 7.99967C1.33325 4.31778 4.31802 1.33301 7.99992 1.33301C11.6818 1.33301 14.6666 4.31778 14.6666 7.99967Z"
          stroke="#98A2B3"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2423_24571">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
