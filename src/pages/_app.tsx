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
      console.log('rocess.env.NEXT_PUBLIC_LIFF_ID', process.env.NEXT_PUBLIC_LIFF_ID)
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
          console.log('liff.isLoggedIn()', liff.isLoggedIn())
           // @ts-ignore
          if (!liff.isLoggedIn()) {
            // @ts-ignore
            liff.login();
        }


        // @ts-ignore
        if (!liff.isLoggedIn() && !liff.isInClient()) {
          window.alert('To get an access token, you need to be logged in. Tap the "login" button below and try again.');
        } else {
          // @ts-ignore
            const accessToken = liff.getAccessToken();
            console.log(accessToken);
        }

        // @ts-ignore
        const idToken = liff.getIDToken();
        console.log(idToken);

        // @ts-ignore
        const idToken2 = liff.getDecodedIDToken();
        console.log(idToken2);

        // @ts-ignore
        liff.getFriendship().then((data) => {
          console.log(data)
          if (data.friendFlag) {

              // something you want to do
          }
      });

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
