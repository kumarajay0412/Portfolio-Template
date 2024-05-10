import React, { useEffect } from "react";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

let tabs = [
  { id: "/", label: "About" },
  { id: "/blogs", label: "Blogs" },
  { id: "/contact", label: "Contact" },
];

function Header() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setActiveTab(tabs[0].id);
    } else if (pathname === "/blogs") {
      setActiveTab(tabs[1].id);
    } else if (pathname === "/contact") {
      setActiveTab(tabs[2].id);
    }
  }, [pathname]);

  return (
    <div className="pt-8  max-w-3xl w-full h-fit">
      <div className="flex flex-col gap-2  justify-start w-full items-start">
        <img
          src="https://i.imgur.com/bGZHUPA.png"
          alt="logo"
          className="w-14 h-14  rounded-full grayscale cursor-pointer"
        />
        <h3 className="font-medium text-gray-900">Ajay Kumar</h3>
        <h4 className="text-gray-500">Engineer & Designer</h4>

        <div className="flex gap-3 mt-4">
          <a href="https://github.com/kumarajay0412" className="flex gap-2">
            <GitHubLogoIcon className="h-6 w-6 shrink-0  transition-transform duration-200 " />
          </a>
          <a href="https://twitter.com/Kumar_ajay0412">
            <TwitterLogoIcon className="h-6 w-6 shrink-0  transition-transform duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/ajay-kumar-a5bb4b193/">
            <LinkedInLogoIcon className="h-6 w-6 shrink-0  transition-transform duration-200" />
          </a>
        </div>
        <hr className="w-full my-4" />
      </div>
      <div className="flex space-x-1 ">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => {
              router.push(tab.id);
              setActiveTab(tab.id);
            }}
            className={`${
              activeTab === tab.id ? "" : "hover:text-gray-600"
            } relative cursor-pointer  rounded-full px-3 py-1.5 text-sm font-medium text-black transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="safari-mix-blend !z-[10] absolute inset-0   bg-white  !mix-blend-difference "
                style={{ borderRadius: 6 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
