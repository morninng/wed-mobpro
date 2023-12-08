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
          <div>日付</div>
          <input type="date"  className="form-control" name="date"  onChange={handleChangeDate} value={date}/>
          <div>時間</div>
          <input type="time"  className="form-control" name="time" onChange={handleChangeTime} value={time}/>
          <div>名前</div>
          <input type="text" className="form-control" name="name" onChange={handleChangeName} value={name}/>
          <div>何をやりたいか</div>
          <input type="text"  className="form-control" name="content" onChange={handleChangeContent} value={content}/>
          <div>Freeコメント</div>
          <input type="text"  className="form-control" name="comment" onChange={handleChangeFreeComment} value={freeComment}/>
          <div style={{textAlign: "center"}}>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              送信
            </button>
          </div>
        </form>
    </div>
    )
  }
