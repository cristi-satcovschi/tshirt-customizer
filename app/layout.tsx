import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Navigation } from "@/app/_ui/Navigation";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Custom T-Shirts",
  description:
    "Design and order custom t-shirts online. Choose from a variety of styles, colors, and sizes to create your unique personalized t-shirts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
