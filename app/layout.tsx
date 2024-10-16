import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://salahcv.site/"),
  title: "Salah - SWE | IXD | UX",
    // تعيين عنوان الموقع الذي سيظهر في المتصفحات ومحركات البحث

  description:
"Recent graduate and aspiring Frontend and Mobile App Developer from Israel, with a focus on React Native and JavaScript technologies. Currently seeking opportunities to apply my skills in mobile app development and UX design. Eager to contribute to innovative projects and grow professionally in a dynamic work environment.",
      // وصف الموقع الذي سيظهر في محركات البحث ومواقع التواصل الاجتماعي

  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Salah Alstre",
    "Next.js",
    "React",
    "ReactNative",
    "Android",
  ],
    // كلمات رئيسية لتحسين محركات البحث (SEO) تساعد في تصنيف الموقع في نتائج البحث

  openGraph: {
    title: "Salah  - SWE | IXD | UX",
    description:
"Recent graduate and aspiring Frontend and Mobile App Developer from Israel, with a focus on React Native and JavaScript technologies. Currently seeking opportunities to apply my skills in mobile app development and UX design. Eager to contribute to innovative projects and grow professionally in a dynamic work environment.",
    images: "/Me.png.png",
    // الصوره الي بتبين لما اشارك الرابط 
  },
  alternates: {
    canonical: "https://salahcv.site/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
