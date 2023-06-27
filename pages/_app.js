/**
 * Wrapper for all pages in the app
 *
 */


import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.css";
import "../styles/media_queries.css";
import "../styles/dashboard_layout.css";

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
