import { cn } from "@/lib/utils";

export const Card = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-lg border border-gray-200 bg-white drop-shadow   ",
        className
      )}
      {...props}
    />
  );
};
