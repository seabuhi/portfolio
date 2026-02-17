import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Seabuhi - Full-Stack Developer",
  description: "Portfolio of Seabuhi - Full-Stack Developer specializing in Mobile (Flutter/Kotlin) and Backend (Spring Boot)",
  keywords: ["Full-Stack Developer", "Flutter", "Kotlin", "Spring Boot", "Next.js", "Portfolio"],
  authors: [{ name: "Seabuhi" }],
  openGraph: {
    title: "Seabuhi - Full-Stack Developer",
    description: "Portfolio of Seabuhi - Full-Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
