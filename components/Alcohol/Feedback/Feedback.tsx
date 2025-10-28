import { useState, type JSX } from "react";
import style from "./Feedback.module.css"


export default function Feedback():JSX.Element {
    const [like,setLike]=useState<number>(0);
    const [dislike,setDislike]=useState<number>(0);

    function CountLikes():void{
      setLike(like+1)  
    }

     function CountDislikes():void{
      setDislike(dislike+1)  
    }

     function Reset():void{
      setDislike(0)  
      setLike(0)  
    }
  return (
    <div>
         <div>
     <h2>Задание 2</h2></div>
        <span style={{ color: "#d3d7e7" }}>{like}</span>
        <button className={style.btn} type="button" onClick={CountLikes}>
            Поставить лайк
          </button>
           <span style={{ color: "#d3d7e7" }}>{dislike}</span>
          <button className={style.btn} type="button" onClick={CountDislikes}>
            Поставить дизлайк
          </button>

          <button className={style.btn} type="button" onClick={Reset}>
            Обнулить
          </button>
    </div>
  )
}
