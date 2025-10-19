import { useState, type JSX } from "react";
import style from './Counter.module.css'

export default function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  // создали переменную состояния counter
  // и функцию setCounter для изменения состояния
  // useState -  это хук
  // в круглых скобках начальное состояние переменной состояния
  // хук useState  принимает начальное значение переменной состояния
  // возвращает массив в котором на первом месте переменная состояния
  // а на втором месте функция  сетер
  // Хук - это функция которая используется только внутри компонента
  // В жизненном цикле компонента React есть 3 фазы:
  // Сборка (mounting) *
  // Обновление (updating)*
  // Разборка (unmounting)*

  function handlePlus(): void {
    setCounter(counter + 1);
  }
 function handleMinus(): void {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Добавление денег</h1>
       <img src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg" alt="" />
      <div className={`${style.container}  ${style.counterClass}`}>
        <button className={style.btn} type="button" onClick={handlePlus}>
          Добавить деньги на счет
        </button>
         <span style={{color:"red"}}>{counter} €</span>
        <button className={style.btn} type="button" onClick={handleMinus}>
            Убрать лишние деньги
        </button>
       
      </div>
    </div>
  );
}

/*
export  default function Counter100(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  function handlePlus100(): void {
    setCounter(counter + 100);
  }

  function handleMinus100(): void {
    setCounter(counter - 100);
  }

  return (
    <div>
         <h1>Отправь 100€</h1>

      <div className={`${style.container}  ${style.counterClass}`}>
        <button className={style.btn} type="button" onClick={handlePlus100}>
          Добавить деньги на счет
        </button>
         <span style={{color:"pink"}}>{counter} €</span>
        <button className={style.btn} type="button" onClick={handleMinus100}>
            Обратно нельзя
        </button>
       
      </div>
    </div>
  );
}*/