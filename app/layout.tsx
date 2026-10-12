import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "McCann Scaping | Lawn Care & Landscaping in Hamilton, Guelph, Cambridge & Kitchener-Waterloo",
  description:
    "Lawn cutting, seasonal clean-ups, tree removal, weeding and yard levelling, stone patios and garden maintenance by owner Noah McCann. 5.0 stars from 8 Google reviews. Fast quotes: (226) 750-3015.",
  openGraph: {
    title: "McCann Scaping | Lawn Care & Landscaping",
    description: "Fast quotes, punctual crews, tidy yards. 5.0 stars on Google. Call Noah at (226) 750-3015.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
