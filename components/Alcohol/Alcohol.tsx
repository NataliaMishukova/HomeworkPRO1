import { useState, type JSX } from "react";
import style from "./Alcohol.module.css";

export default function Alcohol(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  /*делаем сетевой запрос */
  async function loadAlcohol(): Promise<void> {
    /*так как ф-я асинхронная, нам нужна обертка */
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    /* преобразуем формат jeson в формат объекта, конвертация из json в формат строки объекта */
    const obj = await res.json();
    /* деструктуризация */
    const { drinks } = obj; /* лежат в массиве */
    const { strDrink, strDrinkThumb } = drinks[0]; /* сохранили 2 поля */
    setName(strDrink);
    setImage(strDrinkThumb); /* далее используем неиспользуемые ранее поля */
  }
  return (
    <div>
      <h1>Alcohol :{name}</h1>
      <div className={style.container}>
        <img src={image} alt="" /></div>
      <div className={style.btnContainer}>
        <button type="button" onClick={()=>loadAlcohol()}>Next image</button>
      </div>
    </div>
      )
}
