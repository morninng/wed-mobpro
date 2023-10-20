import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from "react";
import { buildReplyText } from 'line-message-builder'



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
      console.log('process.env.NEXT_PUBLIC_LIFF_ID', process.env.NEXT_PUBLIC_LIFF_ID)
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
          alert(liff.isInClient());
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
          liff.sendMessages(buildReplyText(['Send Message']))


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

//    // @ts-ignore
//       liff.permanentLink
//   .createUrlBy('https://example.com/path1?q1=v1')
//   .then((permanentLink: any) => {
//     // https://liff.line.me/1234567890-AbcdEfgh
//     console.log(permanentLink);
//   });
//    // @ts-ignore
// liff.permanentLink
//   .createUrlBy('https://example.com/path1/path2?q1=v1&q2=v2')
//   .then((permanentLink: any) => {
//     // https://liff.line.me/1234567890-AbcdEfgh/path2?q=2=v2
//     console.log(permanentLink);
//   });

     // @ts-ignore
  liff.sendMessages([
    {
      type: "text",
      text: "Hello, World!",
    },
  ])
  .then(() => {
    alert("message sent");
  })
  .catch((err: any) => {
    alert(`error ${JSON.stringify(err)}`);
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
