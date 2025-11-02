import type { JSX } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar(): JSX.Element {
  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        <li className={style.listElement}>
          <NavLink to="alcohol" className={style.link}>
            Alcohol
          </NavLink>
        </li>
        <li className={style.listElement}>
          <NavLink to="carshop" className={style.link}>
            Carshop
          </NavLink>
        </li>
        <li className={style.listElement}>
          <NavLink to="counter" className={style.link}>
            Counter
          </NavLink>
        </li>
        <li className={style.listElement}>
          <NavLink to="dogs" className={style.link}>
            Dogs
          </NavLink>
        </li>
         <li className={style.listElement}>
          <NavLink to="playground" className={style.link}>
            Playground
          </NavLink>
        </li>
        <li className={style.listElement}>
          <NavLink to="playground" className={style.link}>
            Playground
          </NavLink>
        </li>
        <li className={style.listElement}>
          <NavLink to="home" className={style.link}>
            Home
          </NavLink>
        </li>
         <li className={style.listElement}>
          <NavLink to="sandwich" className={style.link}>
            Sandwich
          </NavLink>
        </li>
        <li className={style.listElement}>
          <NavLink to="userspage" className={style.link}>
            UsersPage
          </NavLink>
        </li>
         <li className={style.listElement}>
          <NavLink to="contactform" className={style.link}>
            ContactForm
          </NavLink>
        </li>
         <li className={style.listElement}>
          <NavLink to="Homework_02" className={style.link}>
            Домашнее задание 02
          </NavLink>
        </li>
         <li className={style.listElement}>
          <NavLink to="Homework_03" className={style.link}>
            Домашнее задание 03
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
