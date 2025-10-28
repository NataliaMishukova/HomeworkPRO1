import { useState, type JSX } from "react";
import style from "./Homework_03.module.css";

export default function Homework_03(): JSX.Element {
  const [color, setNewColor] = useState("#d3d7e7");
  function changeGreen(): void {
    setNewColor('linear-gradient(0deg,rgba(34, 195, 50, 1) 0%, rgba(253, 187, 45, 1) 100%');
  }
  function changeRed(): void {
    setNewColor('linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)');
  }

  function changeBlue(): void {
    setNewColor('linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)');
  }

   function Reset(): void {
    setNewColor('#d3d7e7');
  }
  return (
   <div> 
    <h1>Домашнее задание 3</h1>
    <div className={style.container} style={{ background: color }}>
     <div>
     <h2>Задание 1</h2></div>
      <div className={style.button}><button className={style.btn} type="button" onClick={changeRed}>
        Красный фон
      </button>
      <button className={style.btn} type="button" onClick={changeGreen}>
        Зеленый фон
      </button>
      <button className={style.btn} type="button" onClick={changeBlue}>
        Синий фон
      </button>

      <button className={style.btn} type="button" onClick={Reset}>
       Вернуть обратно
      </button>
    </div></div>
    </div> 
  );
}
