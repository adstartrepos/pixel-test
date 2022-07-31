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
        (function () {
          var script = document.createElement('script');
  
          script.type = 'text/javascript';
          script.async = true;
          script.src = 'https://d39k0bjfwb8suf.cloudfront.net/sdk.js';
          script.crossOrigin = 'anonymous'
  
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(script, x);
        })();
  
        window.adstartAsyncInit = function () {
          adstart.init({
            pixelId: 'PIXEL_ID2s',
            isInDebugMode: true,
          })
        }
      `
    }} />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
