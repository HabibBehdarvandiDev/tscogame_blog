import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${Yekan.className} ${Yekan.variable} transition-all duration-300`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
