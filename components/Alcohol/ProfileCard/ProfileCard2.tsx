import type { JSX } from 'react';
import style from './ProfileCard2.module.css';

interface Props {
  image: string;
  name_surname: string;
  work: string;
  hobby: string;
}

export default function ProfileCard2(props: Props): JSX.Element {
  const { image, name_surname, work, hobby } = props;
  return (
    <div className={style.container}>
      <div className={style.avatar}>
        <img className={style.image} src={image} alt='' />
      </div>
      <div className={style.description}>
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
    </div>
  );
}
