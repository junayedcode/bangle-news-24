import { Suspense } from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Marquee from "../components/Marquee";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const notoserifbengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata = {
  title: "Bangla News 24",
  description: "সত্যের সন্ধানে, সবার আগে",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${notoserifbengali.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Suspense fallback={<div className="h-20" />}>
          <Header />
        </Suspense>

        <Suspense fallback={<div className="h-10" />}>
          <Marquee />
        </Suspense>

        <main className="mx-auto w-full max-w-7xl flex-1">
          {children}
        </main>

        <Footer />

        <Toaster />
      </body>
    </html>
  );
}