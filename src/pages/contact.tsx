import Layout from "@/components/Layout";
import React, { useEffect } from "react";

import Cal, { getCalApi } from "@calcom/embed-react";

function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Layout>
      <div className="pt-8 max-w-3xl w-full h-full">
        <div className="text-gray-500 w-full mb-8">
          Let&apos;s work on something together, you can book a meeting below or
          drop a dm on{" "}
          <a
            className="hover:text-gray-600 cursor-pointer underline"
            href="https://twitter.com/Kumar_ajay0412"
          >
            Twitter
          </a>{" "}
          you can email me at{" "}
          <a
            className="hover:text-gray-600 cursor-pointer underline"
            href="mailto:ajaykumar04122000@gmail.com"
          >
            ajaykumar04122000@gmail.com
          </a>
        </div>
        <Cal
          calLink="ajay-kumar/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "column_view" }}
        />
      </div>
    </Layout>
  );
}

export default Contact;
