
// import { buildReplyText } from 'line-message-builder'
import {useState} from 'react'
// const inter = Inter({ subsets: ['latin'] })

export default function ShareFormValue() {
    // const [liffObject, setLiffObject] = useState(null);
    // const [liffError, setLiffError] = useState(null);

    const [email, setEmail] = useState('');
    const [author, setAuthor] = useState('');
    // const [password, setPassword] = useState('');

    const [text, setText] = useState('')

    const handleSubmit = (event: any) => {
      event.preventDefault();
      console.log("author", author)
      console.log("email", email)
        // console.log(event)
        // const date = event.target.value
        // console.log(date)
        // alert('A name was submitted: ');
        shareTarget([author, email])
      }

    const handleChange = (event: any) => {
        setText(event.target.value)
        console.log(event.target.value)
        const message = event.target.value
    }

    const shareTarget = (messages: string[]) => {

      // const liffMessages: {type: string, text: string}[] = messages.map((message)=>{
      //  return  {
      //     type: "text",
      //     text: message,
      //   }
      // })


        liff.shareTargetPicker([
            {
              type: "text",
              text: "sss",
            },
            {
              type: "text",
              text: "sss",
            }
          ]
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


   const handleChangeEmail = (event: any) => {
      setEmail(event.target.value)
    }

    const handleChangeAuthor = (event: any) => {
      setAuthor(event.target.value)
    }

    // const handleSubmit = (data) => {
    //   console.log(data)
    //     // shareTarget(text)
    // }


    return (
        <div>
        <div> ShareFormValue </div>
        <form>

          <p>タイトルと作者</p>
          <p>タイトル</p>
          <input type="text" name="title" onChange={handleChangeEmail} value={email}/>
          <p>作者</p>
          <input type="text" name="author" onChange={handleChangeAuthor} value={author}/>
          <button onClick={handleSubmit}>
            send
          </button>

        </form>
    </div>
    )
  }
