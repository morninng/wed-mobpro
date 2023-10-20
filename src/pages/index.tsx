import Image from 'next/image'
import { Inter } from 'next/font/google'
import { buildReplyText } from 'line-message-builder'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log('ss')



  const sendMessage = () => {

    liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login({})
      }
      const messages = buildReplyText(['Send Message'])
      if (messages.length > 5) {
        console.error('Cannot send more than 5 messages')
        return
      }
      // @ts-ignore
      liff.sendMessages(messages)
    })
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
            <button className="button" onClick={sendMessage}>
        Send Message
      </button>

    </main>
  )
}
