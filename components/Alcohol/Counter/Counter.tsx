import { useState, type JSX } from "react";
import style from "./Counter.module.css";

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
    {
      if (counter == 0) Reset();
    }
  }
  function handlePlus100(): void {
    setCounter(counter + 100);
  }
  function handleMinus100(): void {
    setCounter(counter - 100);
    {
      if (counter < 99) Reset();
    }
  }
  function Reset(): void {
    setCounter(0);
  }
  return (
    <div className={style.container}>
      <div className={style.body}>
        <h1>Добавление денег</h1>
        <img
          src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg"
          alt=""
        />
        <div className={`${style.container}  ${style.counterClass}`}>
          <button className={style.btn} type="button" onClick={handlePlus}>
            Добавить деньги на счет
          </button>
          <button className={style.btn} type="button" onClick={handlePlus100}>
            Добавить 100 Евро на счет
          </button>
          <div className={style.result}>
            <span style={{ color: "#d3d7e7" }}>{counter}€</span>
          </div>
          <button className={style.btn} type="button" onClick={handleMinus}>
            Убрать лишние деньги
          </button>
          <button className={style.btn} type="button" onClick={handleMinus100}>
            Убрать 100 Евро
          </button>
        </div>
        <div>
          <button className={style.btn} type="button" onClick={Reset}>
            Забрать все деньги!
          </button>
        </div>
      </div>
    </div>
  );
}
