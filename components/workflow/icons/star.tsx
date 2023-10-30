import { cn } from "@/lib/utils";

export const Star = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 2.77574L13.8601 7.59233C14.1437 8.32645 14.8313 8.82607 15.6171 8.86885L20.7728 9.14955L16.7668 12.4071C16.1562 12.9036 15.8935 13.712 16.0957 14.4725L17.4219 19.4626L13.0859 16.6592C12.425 16.232 11.575 16.232 10.9141 16.6592L6.57812 19.4626L7.90435 14.4725C8.10648 13.712 7.84382 12.9036 7.23324 12.4071L3.22721 9.14955L8.38288 8.86885C9.16867 8.82607 9.85634 8.32645 10.1399 7.59233L12 2.77574Z"
        fill="#306CFE"
        stroke="#306CFE"
        strokeWidth="2"
      />
    </svg>
  );
};
