import type { Metadata } from "next";
import { Inter, Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oscar Portfolio | Creative Developer & Digital Designer",
  description: "Ultra-modern portfolio showcasing creative development and digital design work",
  keywords: ["portfolio", "developer", "designer", "web development", "UI/UX"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${sora.variable} font-inter antialiased`}
      >
        <LoadingScreen />
        <CustomCursor />
        <div className="grain" />
        <Navigation />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

