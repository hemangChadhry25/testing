import { cn } from "@/lib/utils";

export const SplitPath = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M10 3.83317V13.1665C10 14.5666 10 15.2667 10.2725 15.8015C10.5122 16.2719 10.8946 16.6543 11.365 16.894C11.8998 17.1665 12.5999 17.1665 14 17.1665H14.1667M14.1667 17.1665C14.1667 18.087 14.9129 18.8332 15.8333 18.8332C16.7538 18.8332 17.5 18.087 17.5 17.1665C17.5 16.246 16.7538 15.4998 15.8333 15.4998C14.9129 15.4998 14.1667 16.246 14.1667 17.1665ZM5.83333 3.83317L14.1667 3.83317M5.83333 3.83317C5.83333 4.75365 5.08714 5.49984 4.16667 5.49984C3.24619 5.49984 2.5 4.75365 2.5 3.83317C2.5 2.9127 3.24619 2.1665 4.16667 2.1665C5.08714 2.1665 5.83333 2.9127 5.83333 3.83317ZM14.1667 3.83317C14.1667 4.75364 14.9129 5.49984 15.8333 5.49984C16.7538 5.49984 17.5 4.75365 17.5 3.83317C17.5 2.9127 16.7538 2.1665 15.8333 2.1665C14.9129 2.1665 14.1667 2.9127 14.1667 3.83317ZM10 10.4998H14.1667M14.1667 10.4998C14.1667 11.4203 14.9129 12.1665 15.8333 12.1665C16.7538 12.1665 17.5 11.4203 17.5 10.4998C17.5 9.57936 16.7538 8.83317 15.8333 8.83317C14.9129 8.83317 14.1667 9.57936 14.1667 10.4998Z"
        stroke="#306CFE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
