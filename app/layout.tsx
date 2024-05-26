import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Yekan = localFont({
  src: [
    {
      path: "./fonts/YekanBakhRegular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/YekanBakhSemiBold.woff2",
      weight: "700",
      style: "SemiBold",
    },
    {
      path: "./fonts/YekanBakhBold.woff2",
      weight: "700",
      style: "Bold",
    },
  ],
  variable: "--font-yekan",
});

export const metadata: Metadata = {
  title: "Tscogame Blog",
  description: "Developed by HabibDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Yekan.className} ${Yekan.variable}`}>{children}</body>
    </html>
  );
}
