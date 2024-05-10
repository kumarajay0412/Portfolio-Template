import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className=" p-3 h-screen w-screen  flex justify-start items-center flex-col  overflow-scroll">
      <Header />
      <div className="min-h-screen ">
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
