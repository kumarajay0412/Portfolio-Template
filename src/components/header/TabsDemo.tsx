"use client";

import Image from "next/image";
import { Tabs } from "./Tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "About",
      value: "/",
    },
    // {
    //   title: "Blogs",
    //   value: "/blogs",
    // },
    {
      title: "Contact",
      value: "/contact",
    },
  ];

  return <Tabs tabs={tabs} />;
}
