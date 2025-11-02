import React, { useEffect, useState, type JSX } from 'react';
import style from "./Dogs.module.css";
export default function Dogs(): JSX.Element {
  const [dogs, setDogs] = useState<string>("");
  //const [image, setImage] = useState<string>("");
  async function loadDogs(): Promise<void> {
    /*так как ф-я асинхронная, нам нужна обертка */
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    /* преобразуем формат jeson в формат объекта, конвертация из json в формат строки объекта */
    const obj = await res.json();
    /* деструктуризация */
    console.log(obj);
    const { message } = obj; /* лежат в массиве */
    setDogs(message);
  }
  useEffect(() => {
    loadDogs();
  }, []);
  return (
    <div className={style.container}>
      <h1 className={style.heading}>Random Dog</h1>
      <div className={style.imageContainer}>
        <img className={style.image} src={dogs} alt="random-dog" />
      </div>
      <button className={style.btn} type="button" onClick={() => loadDogs()}>
        Next image
      </button>
    </div>
  );
}
