import type { JSX } from "react";
import Car from "../Car/Car";
import Bike from "../Bike/Bike";

 {/*отправляем информацию в дочерний элемент*/}

export default function CarShop():JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      {/*вызываем*/}
      <Car brand={"BMW"} color={"black"} image={""} /> {/*ссылаемся на дочерний документ*/}
      <Car brand={"Lada"} color={"pink"} image={""} />
      <Car brand={"Volga"} color={"red"} image={""} />
      <Car brand={"Mercedes"} color={"green"} image={""} />
      <Car brand={"Honda"} color={"yellow"} image={""} />
      <Bike gears={8} brand={"harley davidson"} price={14000} image={"https://autoslido.com/assets/images/harley_davidson/harley_davidson_softail.jpg"} />
      <Bike gears={8} brand={"Harley Davidson"} price={14000} image={""} />
      
    </div>
  )
}
