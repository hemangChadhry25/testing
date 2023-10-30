import { cn } from "@/lib/utils";

export const AppEvent = ({
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
    >
      <g clipPath="url(#clip0_1279_10854)">
        <path
          d="M11.9251 6.66663L16.7084 14.95M8.07508 6.66663H17.6417M6.15008 9.99996L10.9334 1.71663M8.07508 13.3333L3.29175 5.04996M11.9251 13.3333H2.35841M13.8501 9.99996L9.06675 18.2833M18.3334 9.99996C18.3334 14.6023 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6023 1.66675 9.99996C1.66675 5.39759 5.39771 1.66663 10.0001 1.66663C14.6025 1.66663 18.3334 5.39759 18.3334 9.99996Z"
          stroke="#306CFE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1279_10854">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
