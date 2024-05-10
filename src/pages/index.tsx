/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
export default function Page() {
  return (
    <Layout>
      <div className="pt-8 max-w-3xl w-full">
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
      </div>
    </Layout>
  );
}
