import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const priceId = process.env.NEXT_PUBLIC_PRICE_ID;

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce to try new architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
