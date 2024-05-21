import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main
      className={` p-3 h-screen w-screen  flex justify-start items-center flex-col  overflow-scroll ${inter.className}`}
    >
      <SpeedInsights />
      <Analytics />
      <Header />
      <div className="">
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
      <Footer />
    </main>
  );
}
