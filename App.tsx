import type { JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import Alcohol from "./components/Alcohol/Alcohol";
import CarShop from "./components/CarShop/CarShop";
import Counter from "./components/Counter/Counter";
import UsersPage from "./components/UsersPage/UsersPage";
import UserPage from "./components/UsersPage/UserPage";
import Homework_02 from "./components/Homework_02/Homework_02";
import Homework_03 from "./components/Homework_03/Homework_03";
import Dogs from "./components/Dogs/Dogs";
import Playground from "./components/Playground/Playground";
import Sandwich from "./components/Sandwich/Sandwich";



function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="alcohol" element={<Alcohol />} />
        <Route path="carshop" element={<CarShop />} />
        <Route path="counter" element={<Counter />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="playground" element={<Playground />} />
        <Route path="home" element={<Home />} />
        <Route path="sandwich" element={<Sandwich />} />
        <Route path="userspage" element={<UsersPage />} />
       { /*<Route path="contactform" element={<ContactForm />} />*/}
        <Route path="/userspage/:userId" element={<UserPage />} />
        <Route path="Homework_02" element={<Homework_02 />} />
        <Route path="Homework_03" element={<Homework_03 />} />
      </Route>
    </Routes>
  );
}

export default App;
