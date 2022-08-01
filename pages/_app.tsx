import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

declare global {
  interface Window {
    // eslint-disable-next-line
    adstart: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy='afterInteractive' id="pixel-sdk" dangerouslySetInnerHTML={{
        __html: `
          !(function (window, document, tag, src, n, t, s) {
            if (window.adstart) return;
    
            n = window.adstart = function () {
              n.queue.push(arguments);
            };
    
            n.push = n;
            n.queue = [];
    
            t = document.createElement(tag);
            t.async = !0;
            t.src = src;
    
            s = document.getElementsByTagName(tag)[0];
            s.parentNode.insertBefore(t, s);
          })(
            window,
            document,
            "script",
            // "https://adstart-pixel.s3.sa-east-1.amazonaws.com/sdk.js"
            "http://localhost:3001/pixel/sdk.js"
            // "https://d39k0bjfwb8suf.cloudfront.net/sdk.js",
          );
          adstart('init', 'PIXEL_ID2s', true);
        `
      }} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
