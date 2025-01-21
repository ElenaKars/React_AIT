import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Counter() {
  // Шаг 2 - вызываем хук useState и передаём в вызов (в круглые скобки) начальное состояние (initialState)
  //при вызове хук useState возвращает массив из двух элементов
  // 1-й элемент - значение состояния (актуальное)
  // 2-й элемент - функция, которая может изменять значение состояния
  // const counterStateAr = useState(2);
  // const [counter, setCounter] = counterStateAr;
  // console.log(counterStateAr);

  //Для упрощения делаем деструктуризацию

  const [counter, setCounter] = useState(0);

  const onPlusClick = () => {
    setCounter((prevState) => prevState + 1);
  };

  const onMinusClick = () => {
    setCounter((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  };
  return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" onClick={onMinusClick} />
      </div>
      <div className="result-container">{counter}</div>
      <div className="button-wrapper">
        <Button name="+" onClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;
