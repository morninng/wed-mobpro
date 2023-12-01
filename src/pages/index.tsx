import Image from 'next/image'
import  DateShare from './date'
import ShareFormValue from './form'
import { Inter } from 'next/font/google'
import { buildReplyText } from 'line-message-builder'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log('ss')



  const shareTarget = () => {
    liff.shareTargetPicker([
        {
          type: "text",
          text: "shareTargetPicker, World!",
        },
      ],
    )
    .then( (res: any)=> {
      if (res) {
        // succeeded in sending a message through TargetPicker
        alert(`[${res.status}] Message sent!`);
      } else {
        // sending message canceled
        alert("TargetPicker was closed!");
      }
    })
    .catch( (error) => {
      // something went wrong before sending a message
      alert(`something wrong happen ${JSON.stringify(error)}}`);
    });

  }



  const shareImage = () => {
    liff.shareTargetPicker([
      {
        "type": "image",
        "originalContentUrl": "https://storage.googleapis.com/valid-weaver-296705.appspot.com/group-2/Jz2CukRB7QvCVavBAfI1/pc_cover.jpg?cb=1698395549185",
        "previewImageUrl": "https://storage.googleapis.com/valid-weaver-296705.appspot.com/group-2/Jz2CukRB7QvCVavBAfI1/pc_cover.jpg?cb=1698395549185"
      }
      ],
    )
    .then( (res: any)=> {
      if (res) {
        // succeeded in sending a message through TargetPicker
        alert(`[${res.status}] Message sent!`);
      } else {
        // sending message canceled
        alert("TargetPicker was closed!");
      }
    })
    .catch( (error) => {
      // something went wrong before sending a message
      alert(`something wrong happen ${JSON.stringify(error)}}`);
    });

  }

  const sendMessage = () => {

    liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID as string }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login({})
      }
      try{
        const messages = buildReplyText(['Send Message'])
        if (messages.length > 5) {
          console.error('Cannot send more than 5 messages')
          return
        }else{
          console.log('1 message')

        }
        // @ts-ignore
        liff.sendMessages([
          {
            type: "text",
            text: "Hello, World!",
          },
        ])
        .then(()=>{
          console.log('success')
        })
        .catch((err)=>{
          console.log('error', err)
          alert(JSON.stringify(err))
        })
      }catch(err){
        console.log('dd', err)
        alert(JSON.stringify(err))
      }

    })
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ShareFormValue />



    </main>
  )
}
