"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/util/common";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

const tabs = [
  {
    title: "About",
    value: "/",
  },
  {
    title: "Blogs",
    value: "/blogs",
  },
  {
    title: "Contact",
    value: "/contact",
  },
];

export const Tabs = () => {
  const [active, setActive] = useState<Tab>(tabs[0]);
  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setActive(tabs[0]);
    } else if (pathname.includes("blogs")) {
      setActive(tabs[1]);
    } else if (pathname === "/contact") {
      setActive(tabs[2]);
    }
  }, [pathname]);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full gap-2"
        )}
      >
        {tabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              router.push(tab.value);
              setActive(tabs[idx]);
            }}
            className={cn("relative px-3 py-1 rounded-md")}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-300 dark:bg-zinc-800 rounded-md "
                )}
              />
            )}
            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};
