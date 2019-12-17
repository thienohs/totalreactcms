import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>NextJS Desktop Boilerplate</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, user-scalable=no, minimal-ui"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <link rel="stylesheet" href="static/styles/bulma.min.css" />
          <link href="https://unpkg.com/normalize.css@^7.0.0" rel="stylesheet" />
          <link
            href="https://unpkg.com/@blueprintjs/core@^3.0.0/lib/css/blueprint.css"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/@blueprintjs/icons@^3.0.0/lib/css/blueprint-icons.css"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
