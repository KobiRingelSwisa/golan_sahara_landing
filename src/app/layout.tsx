import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FloatingWA from "@/components/FloatingWA";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "סהרה - קייטרינג לאירועים",
  description:
    "קייטרינג כשר למהדרין לאירועים פרטיים ועסקיים. תפריט מגוון עם מנות מסורתיות ומודרניות.",
  keywords: "קייטרינג, אירועים, כשר למהדרין, מנות ראשונות, עיקריות, סלטים",
  authors: [{ name: "סהרה קייטרינג" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${heebo.variable} font-heebo antialiased bg-white text-charcoal`}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppCTA />
          <FloatingWA />
        </div>
      </body>
    </html>
  );
}
