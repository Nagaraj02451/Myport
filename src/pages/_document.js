import { Html, Head, Main, NextScript, Meta, link } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <title>Nagaraj - Web developer</title>
      <meta name="twitter:image" content="N.svg" />

      <link rel="stylesheet" href="/style.css" media="all" />
      <link rel="icon" type="image/x-icon" href="N.svg" />
      <link rel="icon" type="image/icon" href="N.svg" />
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
