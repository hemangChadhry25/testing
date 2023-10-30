import "./globals.css";
import { Inter } from "next/font/google";
import {ToolkitProvider} from "./ToolkitProvider"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToolkitProvider>

    <html className={inter.variable} lang="en">
      <body>{children}</body>
    </html>
    </ToolkitProvider>
  );
}
