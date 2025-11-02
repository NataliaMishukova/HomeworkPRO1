import { useEffect, useState, type JSX } from "react";
import type User from "./types/User";
import style from "./UsersPage.module.css";
import { Link } from "react-router-dom";

export default function UsersPage(): JSX.Element {
  const [users, setUser] = useState<User[]>([]);
  async function loadUsers(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/users");
    const arr = await res.json();
    setUser(arr);
  }
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
     <h1>UsersPage</h1>
      <ul>
        {users.map((user) => (
          <li
            style={{ border: "solid black 2px", margin: "10px" }}
            key={user.id}
          >
            {" "}
            <div>Ник: {user.username}</div>
            <div>
              Имя, Фамилия: {user.name.firstname} {user.name.lastname}
            </div>
            <div>Телефон: {user.phone}</div>
            <div>Email: {user.email}</div>
            <div>Zip-code: {user.address.zipcode}</div>
            <Link to={String(user.id)}>К пользователю </Link>
          </li>//приведение к строке чтобы прикрепить к link
        ))}
      </ul>
    </div>
  );
}
