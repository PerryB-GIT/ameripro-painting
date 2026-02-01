import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AmeriPro Painting | Professional Painting Services in North Alabama",
  description:
    "Woman-owned professional painting contractor serving Decatur, Huntsville, and Morgan County Alabama. Residential and commercial painting with 9+ years of experience. Call (256) 606-3109 for a free estimate.",
  keywords:
    "painting contractor, house painter, commercial painting, residential painting, Decatur AL, Huntsville AL, Morgan County, North Alabama, woman-owned business",
  openGraph: {
    title: "AmeriPro Painting | North Alabama's Trusted Painting Professionals",
    description:
      "Transform your home or business with AmeriPro Painting. Woman-owned, locally operated, serving North Alabama since 2016.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
