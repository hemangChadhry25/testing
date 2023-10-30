import { cn } from "@/lib/utils";

export const NewProject = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="29"
      viewBox="0 0 26 29"
      fill="none"
      className={cn("h-5 w-5", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.2869 16.4229H18.4913C18.1133 16.4186 17.7899 16.6958 17.7332 17.0727C17.404 19.4477 15.3885 21.2143 13.0104 21.2122L14.5796 28.44C20.2649 27.691 24.6408 23.0083 25.045 17.2409C25.0597 17.029 24.9864 16.8205 24.8426 16.6654C24.6988 16.5102 24.4975 16.4224 24.2869 16.4229Z"
        fill="#2684FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2574 16.2394L22.5963 9.01159C22.7595 8.86647 22.853 8.65765 22.853 8.43825C22.853 8.21885 22.7595 8.01003 22.5963 7.86491L14.2574 0.625598C14.0324 0.434087 13.7178 0.391279 13.4505 0.515806C13.1832 0.640334 13.0116 0.909669 13.0104 1.20658V15.6585C13.0116 15.9554 13.1832 16.2247 13.4505 16.3492C13.7178 16.4738 14.0324 16.4309 14.2574 16.2394Z"
        fill="#2684FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.06738 18.0014C1.86495 24.0395 6.97033 28.5505 13.011 28.5546V21.2121C10.3861 21.2121 8.25649 19.0697 8.25022 16.4229L1.06738 18.0014Z"
        fill="url(#paint0_linear_1288_22605)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.953125 16.3082V16.4229H8.24968C8.25595 13.776 10.3856 11.6336 13.0104 11.6336L11.445 4.40576C5.49754 5.18725 1.02548 10.2606 0.953125 16.3082Z"
        fill="url(#paint1_linear_1288_22605)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1288_22605"
          x1="7.04108"
          y1="4.49747"
          x2="7.04108"
          y2="21.0592"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1288_22605"
          x1="6.98368"
          y1="4.4975"
          x2="6.98368"
          y2="21.0592"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
