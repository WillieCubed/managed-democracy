import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Managed Democracy",
  description:
    "Demonstrating how AI can be used to jailbreak the legislative process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "bg-surface-container",
          "h-svh w-full",
        )}
      >
        {children}
      </body>
    </html>
  );
}
