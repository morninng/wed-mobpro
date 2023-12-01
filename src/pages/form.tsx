import {useState} from 'react'

export default function ShareFormValue() {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [freeComment, setFreeComment] = useState('');

    const handleSubmit = (event: any) => {
      event.preventDefault();
      const aaa = `申込日時:${date}です \n` +
                  `時間:${time}です \n` +
                  `コンテンツ:${content}です\n` +
                  `コメント:${freeComment}です\n`
        shareTarget(aaa)
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
            alert(`[${res.status}] Message sent!`);
          } else {
            alert("TargetPicker was closed!");
          }
        })
        .catch( (error) => {
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

    return (
        <div>
        <div> 予約フォーム </div>
        <form>
          <p>日付</p>
          <input type="date" name="date"  onChange={handleChangeDate} value={date}/>
          <p>時間</p>
          <input type="time" name="time" onChange={handleChangeTime} value={time}/>
          <p>名前</p>
          <input type="text" name="name" onChange={handleChangeName} value={name}/>
          <p>何をやりたいか</p>
          <input type="text" name="content" onChange={handleChangeContent} value={content}/>
          <p>Freeコメント</p>
          <input type="text" name="comment" onChange={handleChangeFreeComment} value={freeComment}/>
          <div style={{textAlign: "center"}}>
            <button onClick={handleSubmit}>
              送信
            </button>
          </div>
        </form>
    </div>
    )
  }
