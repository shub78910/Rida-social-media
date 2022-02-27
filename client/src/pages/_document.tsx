import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Rida</title>
          {/* give favicon  */}
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body className="my-5 bg-fixed bg-green-100 dark:bg-black dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
