import { cn } from "@/lib/utils";

export const Trash = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-[17px]", className)}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.19995 4.00016H3.53328M3.53328 4.00016H14.2M3.53328 4.00016V13.3335C3.53328 13.6871 3.67376 14.0263 3.92381 14.2763C4.17386 14.5264 4.513 14.6668 4.86662 14.6668H11.5333C11.8869 14.6668 12.226 14.5264 12.4761 14.2763C12.7261 14.0263 12.8666 13.6871 12.8666 13.3335V4.00016H3.53328ZM5.53328 4.00016V2.66683C5.53328 2.31321 5.67376 1.97407 5.92381 1.72402C6.17386 1.47397 6.513 1.3335 6.86662 1.3335H9.53328C9.88691 1.3335 10.226 1.47397 10.4761 1.72402C10.7261 1.97407 10.8666 2.31321 10.8666 2.66683V4.00016M6.86662 7.3335V11.3335M9.53328 7.3335V11.3335"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
