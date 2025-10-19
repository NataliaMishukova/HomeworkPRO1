import type { JSX } from "react";
import style from "./ProfileCard.module.css";

interface Props {
  image: string;
  name_surname: string;
  work: string;
  hobby: string;
}

export default function ProfileCard(props: Props): JSX.Element {
  const { image, name_surname, work, hobby } = props;
  return (
    <div className={style.container}>
      <img className={style.image} src={image} alt="" />
      <h2>{name_surname} </h2>
      <p>
        <b>Должность: </b>
        {work}
      </p>
      <p>
        <b>Хобби: </b>
        {hobby}
      </p>
    </div>
  );
}
