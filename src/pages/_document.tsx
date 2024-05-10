import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="https://i.imgur.com/N9nmQzg.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="title" content="Ajay's Portfolio" />
        <meta
          name="description"
          content="Portfolio website for Ajay, a software engineer based in India."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://gan.ai/" /> */}
        <meta name="title" property="og:title" content="Ajay's Portfolio" />
        <meta
          property="og:description"
          content="Portfolio website of Ajay, a software engineer based in India."
        />
        <meta name="image" property="og:image" content="/og_image.webp" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta property="twitter:url" content="https://gan.ai" /> */}
        <meta property="twitter:title" content="Ajay's Portfolio" />
        <meta
          property="twitter:description"
          content="Portfolio website of Ajay, a software engineer based in India."
        />
        <meta property="twitter:image" content="/og_image.webp" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="theme-color" content="#0D0E12" />
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/23361068.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
