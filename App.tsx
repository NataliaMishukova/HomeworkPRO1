import type { JSX } from "react";
import "./App.css";
import CarShop from "./components/CarShop/CarShop";

import Homework_02 from "./components/Homework_02/Homework_02";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Counter from "./components/Counter/Counter";
import Sandwich from "./components/Sandwich/Sandwich";
import Alcohol from "./components/Alcohol/Alcohol";
import Homework_03 from "./components/Homework_03/Homework_03";
import Feedback from "./components/Feedback/Feedback";

function App(): JSX.Element {
  return (
    <div>
      <Homework_03 />
      <Feedback />
      {/*<Homework_02 />*/}
     {/*<Sandwich />*/}
     {/* <Counter />*/}
    </div>
  );
}

export default App;
