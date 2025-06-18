import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Abhishek Gupta - Computer Science Student & Developer",
  description: "Portfolio of Abhishek Gupta, a passionate B.Tech CSE student specializing in web development, programming, and innovative software solutions.",
  keywords: "Abhishek Gupta, Computer Science Student, Web Developer, B.Tech CSE, Programming, Portfolio",
  authors: [{ name: "Abhishek Gupta" }],
  openGraph: {
    title: "Abhishek Gupta - Computer Science Student & Developer",
    description: "Portfolio of Abhishek Gupta, a passionate B.Tech CSE student specializing in web development and programming.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}