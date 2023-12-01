
// import { buildReplyText } from 'line-message-builder'
import {useState} from 'react'
// const inter = Inter({ subsets: ['latin'] })

export default function ShareFormValue() {
    // const [liffObject, setLiffObject] = useState(null);
    // const [liffError, setLiffError] = useState(null);

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    // const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [freeComment, setFreeComment] = useState('');
    // const [password, setPassword] = useState('');

    const [text, setText] = useState('')

    const handleSubmit = (event: any) => {
      event.preventDefault();
      // console.log("author", author)
      // console.log("email", email)
        // console.log(event)
        // const date = event.target.value
        // console.log(date)
        // alert('A name was submitted: ');


        const aaa = `申込日時：${date}です
      時間：${time}です
      コンテンツ${content}です
      コメント：${freeComment}です
        `
        shareTarget(aaa)
      }

    const handleChange = (event: any) => {
        setText(event.target.value)
        console.log(event.target.value)
        const message = event.target.value
    }

    const shareTarget = (messages: string) => {

        liff.shareTargetPicker([
            {
              type: "text",
              text: messages,
            },
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


   const handleChangeDate = (event: any) => {
      setDate(event.target.value)
    }
    const handleChangeTime = (event: any) => {
      setTime(event.target.value)
    }

    const handleChangeName = (event: any) => {
      setName(event.target.value)
    }

    const handleChangeContent = (event: any) => {
      setContent(event.target.value)
    }
    const handleChangeFreeComment = (event: any) => {
      setFreeComment(event.target.value)
    }

    // const handleSubmit = (data) => {
    //   console.log(data)
    //     // shareTarget(text)
    // }


    return (
        <div>
        <div> 予約フォーム </div>
        <form>
          <p>日付</p>
          <input type="date" name="date" onChange={handleChangeDate} value={date}/>
          <p>時間</p>
          <input type="time" name="time" onChange={handleChangeTime} value={author}/>
          <p>名前</p>
          <input type="text" name="name" onChange={handleChangeName} value={name}/>
          <p>何をやりたいか</p>
          <input type="text" name="content" onChange={handleChangeContent} value={content}/>
          <p>Freeコメント</p>
          <input type="text" name="comment" onChange={handleChangeFreeComment} value={freeComment}/>
          <button onClick={handleSubmit}>
            send
          </button>

        </form>
    </div>
    )
  }
