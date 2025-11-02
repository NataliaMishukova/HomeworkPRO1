import type { JSX } from "react";
import ProfileCard from "../ProfileCard/ProfileCard2";
import style from './Homework_02.module.css';

export default function CardGallery(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.head}>
        <h1>Карточки пользователей</h1>
      </div>
      <div className={style.content}>
        <ProfileCard
          image={"https://i.pravatar.cc/150?img=10"}
          name_surname={"Наталья Сергеевна"}
          work={"Фронтенд-разработчик"}
          hobby={"Фитнес"}
        />
        <ProfileCard
          image={"https://i.pravatar.cc/150?img=16"}
          name_surname={"Лариса Викторовна"}
          work={"Фулстек-разработчик"}
          hobby={"Бег"}
        />
        <ProfileCard
          image={"https://i.pravatar.cc/150?img=19"}
          name_surname={"Надежда Александровна"}
          work={"Бухгалтер"}
          hobby={"Бег"}
        />
      </div>
    </div>
  );
}
