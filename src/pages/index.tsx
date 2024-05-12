/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <Layout>
      <div className="pt-8 max-w-3xl w-full h-full">
        <div className="text-gray-500">
          I&apos;m a Software Engineer currently working at{" "}
          <a
            className="hover:text-gray-600 cursor-pointer underline"
            href="https://gan.ai/"
          >
            Gan.ai
          </a>
          , where I work on building the next generation of video
          personalization platform. I love to craft beautiful web products.
          Previously, I have worked with amazing companies like{" "}
          <a
            className="hover:text-gray-600 cursor-pointer underline"
            href="https://www.mercari.com/"
          >
            Mercari
          </a>
          ,{" "}
          <a
            className="hover:text-gray-600 cursor-pointer underline"
            href="https://chartr.in/"
          >
            Chartr
          </a>
          , and{" "}
          <a
            className="hover:text-gray-600 cursor-pointer underline"
            href="https://in.mathworks.com/"
          >
            Mathworks
          </a>
          .
        </div>

        <div className="text-lg my-7">Experience </div>

        <ol className="pl-3">
          <li className="border-l-2 border-gray-300">
            <div className="flex flex-start">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-500 -ml-[13px] border-[2px] border-gray-300"></div>
              <div className="h-[100px] px-2 md:px-4 text-md text-gray-600">
                Software Engineer at{" "}
                <a
                  className="hover:text-gray-600 cursor-pointer underline"
                  href="https://gan.ai/"
                >
                  Gan.ai
                </a>
                <br />
                <div className="text-xs mt-2 ">Jan 2023 - Present</div>
              </div>
            </div>
          </li>
          <li className="border-l-2 border-gray-300">
            <div className="flex flex-start">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 -ml-[13px] border-[2px] border-gray-300"></div>
              <div className="h-[100px] px-2 md:px-4 text-md text-gray-600">
                SWE Intern at{" "}
                <a
                  className="hover:text-gray-600 cursor-pointer underline"
                  href="https://www.linkedin.com/company/mercari-inc-/"
                >
                  Mercari
                </a>
                <br />
                <div className="text-xs mt-2 ">Aug 2022 - Nov 2022</div>
              </div>
            </div>
          </li>
          <li className="border-l-2 border-gray-300">
            <div className="flex flex-start">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 -ml-[13px] border-[2px] border-gray-300"></div>
              <div className="h-[100px] px-2 md:px-4 text-md text-gray-600">
                EDG Intern at{" "}
                <a
                  className="hover:text-gray-600 cursor-pointer underline"
                  href="https://www.linkedin.com/company/the-mathworks_2/"
                >
                  Mathworks
                </a>
                <br />
                <div className="text-xs mt-2 ">May 2022 - Aug 2022</div>
              </div>
            </div>
          </li>
          <li className="border-l-2 border-gray-300">
            <div className="flex flex-start">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 -ml-[13px] border-[2px] border-gray-300"></div>
              <div className="h-[100px] px-2 md:px-4 text-md text-gray-600">
                Researcher at{" "}
                <a
                  className="hover:text-gray-600 cursor-pointer underline"
                  href="https://chartr.in/"
                >
                  Chartr
                </a>
                <br />
                <div className="text-xs mt-2 ">Aug 2021 - Jan 2023</div>
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex flex-start">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 -ml-[13px] border-[2px] border-gray-300"></div>
              <div className="h-[100px] px-2 md:px-4 text-md text-gray-600">
                SDE Intern at{" "}
                <a
                  className="hover:text-gray-600 cursor-pointer underline"
                  href="https://www.linkedin.com/company/tweek-labs/"
                >
                  Tweek Labs
                </a>
                <br />
                <div className="text-xs mt-2 ">May 2021 - June 2021</div>
              </div>
            </div>
          </li>
        </ol>

        <div className="text-lg my-7">Projects </div>

        <div className="grid  grid-cols-1 gap-3  md:grid-cols-3">
          <motion.div
            onClick={() => window.open("https://www.ajay-kumar.in/", "_blank")}
            whileHover={{
              y: -10, // Move up by 10 pixels
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-full  rounded-md p-3 flex gap-4 flex-col cursor-pointer"
          >
            <div className=" h-8 w-8 p-2 rounded-md bg-black ">
              <svg
                className="text-white"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="text-md text-gray-600">Portfolio</div>
            <div className="text-xs text-gray-500">
              Personal Portfolio website and Blogging Platform
            </div>
          </motion.div>
          <motion.div
            onClick={() => window.open("https://chartr.in/", "_blank")}
            whileHover={{
              y: -10, // Move up by 10 pixels
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-full  rounded-md p-3 flex gap-4 flex-col cursor-pointer"
          >
            <div className=" h-8 w-8 p-2 rounded-md bg-black ">
              <img
                src="https://framerusercontent.com/images/kOuXE0IPZpxdRpazxtQZbYNbz84.png"
                className="h-ful w-full   brightness-[5]"
              />
            </div>
            <div className="text-md text-gray-600">Chartr</div>
            <div className="text-xs text-gray-500">
              One Delhi and Chartr PWA: Real-Time Bus Tracking and DTC Ticketing
            </div>
          </motion.div>
          <motion.div
            onClick={() =>
              window.open("https://github.com/kumarajay0412/SACE-DIS", "_blank")
            }
            whileHover={{
              y: -10, // Move up by 10 pixels
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-full  rounded-md p-3 flex gap-4 flex-col cursor-pointer"
          >
            <div className=" h-8 w-8 p-2 rounded-md bg-black ">
              <svg
                className="text-white"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.900024 7.50002C0.900024 3.85495 3.85495 0.900024 7.50002 0.900024C11.1451 0.900024 14.1 3.85495 14.1 7.50002C14.1 11.1451 11.1451 14.1 7.50002 14.1C3.85495 14.1 0.900024 11.1451 0.900024 7.50002ZM7.50002 1.80002C4.35201 1.80002 1.80002 4.35201 1.80002 7.50002C1.80002 10.648 4.35201 13.2 7.50002 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.35201 10.648 1.80002 7.50002 1.80002ZM3.07504 7.50002C3.07504 5.05617 5.05618 3.07502 7.50004 3.07502C9.94388 3.07502 11.925 5.05617 11.925 7.50002C11.925 9.94386 9.94388 11.925 7.50004 11.925C5.05618 11.925 3.07504 9.94386 3.07504 7.50002ZM7.50004 3.92502C5.52562 3.92502 3.92504 5.52561 3.92504 7.50002C3.92504 9.47442 5.52563 11.075 7.50004 11.075C9.47444 11.075 11.075 9.47442 11.075 7.50002C11.075 5.52561 9.47444 3.92502 7.50004 3.92502ZM7.50004 5.25002C6.2574 5.25002 5.25004 6.25739 5.25004 7.50002C5.25004 8.74266 6.2574 9.75002 7.50004 9.75002C8.74267 9.75002 9.75004 8.74266 9.75004 7.50002C9.75004 6.25738 8.74267 5.25002 7.50004 5.25002ZM6.05004 7.50002C6.05004 6.69921 6.69923 6.05002 7.50004 6.05002C8.30084 6.05002 8.95004 6.69921 8.95004 7.50002C8.95004 8.30083 8.30084 8.95002 7.50004 8.95002C6.69923 8.95002 6.05004 8.30083 6.05004 7.50002Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="text-md text-gray-600">SACE</div>
            <div className="text-xs text-gray-500">
              Augmented Reality Platform for Sharing and Celebrating Memorable
              Experiences
            </div>
          </motion.div>

          <motion.div
            onClick={() =>
              window.open(
                "https://sites.google.com/iiitd.ac.in/trsna/home?authuser=4",
                "_blank"
              )
            }
            whileHover={{
              y: -10, // Move up by 10 pixels
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-full  rounded-md p-3 flex gap-4 flex-col cursor-pointer "
          >
            <div className=" h-8 w-8 p-2 rounded-md bg-black ">
              <svg
                className="text-white"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 1.5C4.5 4.25 3 6.5 3 9C3 11.4853 5.01472 13.5 7.5 13.5C9.98528 13.5 12 11.4853 12 9C12 6.5 10.5 4.25 7.5 1.5ZM11 9C11 7.11203 9.97315 5.27195 7.5 2.87357C5.02686 5.27195 4 7.11203 4 9C4 10.933 5.567 12.5 7.5 12.5C9.433 12.5 11 10.933 11 9Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="text-md text-gray-600">Trsna</div>
            <div className="text-xs text-gray-500">
              A IOT based Smart Tap for water conservation and tracking of usage
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
