import Image from 'next/image'
import { Inter } from 'next/font/google'
import { buildReplyText } from 'line-message-builder'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log('ss')



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
        liff.sendMessages(messages)
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
            <button className="button" onClick={sendMessage}>
        Send Messagedd kk
      </button>

    </main>
  )
}
