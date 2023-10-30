import { cn } from "@/lib/utils";

export const SavedTime = ({
  className,
  ...props
}: any) => {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.65552 4.49927V7.62427L9.53052 8.87427"
        stroke="#667085"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.86476 4.38557L2.32197 6.09292L4.02982 5.63557M2.34587 5.74587C2.42883 5.55681 2.52301 5.37039 2.62864 5.18744C4.18194 2.49704 7.62213 1.57524 10.3125 3.12854C13.0029 4.68184 13.9247 8.12204 12.3714 10.8124C10.8181 13.5028 7.37793 14.4246 4.68753 12.8713C3.15723 11.9878 2.19913 10.4938 1.94325 8.87456"
        stroke="#667085"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
