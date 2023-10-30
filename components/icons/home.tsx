import { cn } from "@/lib/utils";

export const Home = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[18px] w-[18px]", className)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 12.75H12M8.26327 2.07306L3.17654 6.0294C2.83652 6.29387 2.6665 6.4261 2.54402 6.5917C2.43552 6.73839 2.3547 6.90365 2.30552 7.07935C2.25 7.2777 2.25 7.49308 2.25 7.92385V13.35C2.25 14.1901 2.25 14.6102 2.41349 14.931C2.5573 15.2133 2.78677 15.4427 3.06901 15.5866C3.38988 15.75 3.80992 15.75 4.65 15.75H13.35C14.1901 15.75 14.6101 15.75 14.931 15.5866C15.2132 15.4427 15.4427 15.2133 15.5865 14.931C15.75 14.6102 15.75 14.1901 15.75 13.35V7.92385C15.75 7.49308 15.75 7.2777 15.6945 7.07935C15.6453 6.90365 15.5645 6.73839 15.456 6.5917C15.3335 6.4261 15.1635 6.29387 14.8235 6.02941L9.73673 2.07306C9.47324 1.86812 9.34149 1.76565 9.19601 1.72626C9.06765 1.69151 8.93235 1.69151 8.80399 1.72626C8.65851 1.76565 8.52677 1.86812 8.26327 2.07306Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
