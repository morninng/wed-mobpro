
// import { buildReplyText } from 'line-message-builder'
import {useState} from 'react'
// const inter = Inter({ subsets: ['latin'] })

export default function DateShare() {
    const [liffObject, setLiffObject] = useState(null);
    const [liffError, setLiffError] = useState(null);


    const [text, setText] = useState('')

    const handleSubmit = (event: any) => {
        console.log(event)
        const date = event.target.value
        console.log(date)
        // alert('A name was submitted: ');
        event.preventDefault();
      }

    const handleChange = (event: any) => {
    setText(event.target.value)
    console.log(event.target.value)
    const message = event.target.value


    }

    const shareTarget = (message: string) => {

        liff.shareTargetPicker([
            {
              type: "text",
              text: message,
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


   const handleChangeText = (event: any) => {
        setText(event.target.value)
    }

    const sendText = () => {
        shareTarget(text)
    }


return (
    <div>
<form onSubmit={handleSubmit}>

<input type="date" onChange={handleChange}  value="2017-06-01" />


<input type="text" onChange={handleChangeText}  />
<button type="button" onClick={sendText}> send text</button>

</form>
    </div>
    )
  }
