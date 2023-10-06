import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from "react";



export default function App({ Component, pageProps }: AppProps) {
  console.log('ss')
  const [liffObject, setLiffObject] = useState(null);
  const [liffError, setLiffError] = useState(null);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    console.log('ss')
    // to avoid `window is not defined` error

    import("@line/liff").then((liff) => {
      console.log("start liff.init()...");
      // @ts-ignore
      liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID })
        .then(() => {
          console.log("liff.init() done");
                // @ts-ignore
          setLiffObject(liff);

          // @ts-ignore
          console.log(liff.getLanguage());
          // @ts-ignore
          console.log(liff.getVersion());
          // @ts-ignore
          console.log(liff.isInClient());
          // @ts-ignore
          console.log(liff.isLoggedIn());
          // @ts-ignore
          console.log(liff.getOS());
          // @ts-ignore
          console.log(liff.getLineVersion());


           // @ts-ignore
          if (!liff.isLoggedIn()) {
             // @ts-ignore
            liff.login();
        }

        })
        .catch((error: any) => {
          console.log(`liff.init() failed: ${error}`);
          if (!process.env.liffId) {
            console.info(
              "LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable."
            );
          }
          setLiffError(error.toString());
        });
    });
  }, []);





  return <Component {...pageProps} />
}
