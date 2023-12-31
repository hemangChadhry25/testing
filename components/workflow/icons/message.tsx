import { cn } from "@/lib/utils";

export const Lupa = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("", className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.3332 4.99967C18.3332 4.08301 17.5832 3.33301 16.6665 3.33301H3.33317C2.4165 3.33301 1.6665 4.08301 1.6665 4.99967M18.3332 4.99967V14.9997C18.3332 15.9163 17.5832 16.6663 16.6665 16.6663H3.33317C2.4165 16.6663 1.6665 15.9163 1.6665 14.9997V4.99967M18.3332 4.99967L9.99984 10.833L1.6665 4.99967"
        stroke="#306CFE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
