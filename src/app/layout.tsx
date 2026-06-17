import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "شريف عيسى | حجز فنادق 5 نجوم في القاهرة بأسعار حصرية",
  description: "احجز أفخم فنادق القاهرة (سانت ريجيس، فيرمونت، ماريوت الزمالك، سوفيتيل) بأسعار حصرية مباشرة عبر الواتساب مع شريف عيسى.",
  keywords: "شريف عيسى, حجز فنادق القاهرة, فنادق 5 نجوم القاهرة, سانت ريجيس القاهرة, فيرمونت نايل سيتي, ماريوت الزمالك, سوفيتيل الجزيرة",
  authors: [{ name: "Sharif Eissa" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-gold selection:text-background">
        {children}
      </body>
    </html>
  );
}

