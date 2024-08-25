import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
if (typeof window !== "undefined") {
  // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
    },
  });
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main
      className={` p-3 h-screen w-screen  flex justify-start items-center flex-col  overflow-scroll ${inter.className}`}
    >
      <SpeedInsights />
      <Analytics />
      <Header />
      <PostHogProvider client={posthog}>
        <div className="">
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
      </PostHogProvider>
      <Footer />
    </main>
  );
}
