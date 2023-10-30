import { cn } from "@/lib/utils";

export const PencilHover = ({
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
        d="M8.50024 13.3332H14.5002M11.5002 2.33316C11.7655 2.06794 12.1252 1.91895 12.5002 1.91895C12.686 1.91895 12.8699 1.95553 13.0414 2.0266C13.213 2.09767 13.3689 2.20184 13.5002 2.33316C13.6316 2.46448 13.7357 2.62038 13.8068 2.79196C13.8779 2.96354 13.9145 3.14744 13.9145 3.33316C13.9145 3.51888 13.8779 3.70277 13.8068 3.87436C13.7357 4.04594 13.6316 4.20184 13.5002 4.33316L5.16691 12.6665L2.50024 13.3332L3.16691 10.6665L11.5002 2.33316Z"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
