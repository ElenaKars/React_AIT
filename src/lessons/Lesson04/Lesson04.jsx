import "./styles.css";
import Button from "../../components/Button/Button";
import Counter from "../../components/counter/Counter";

function Lesson04() {
  const showMessage = () => alert("Outer Func");

  const showCustomMessage = (name) => alert(`Func outer - ${name}`);
  return (
    <div className="lesson04-wrapper">
      <Counter />
      <div className="buttons-container">
        <Button
          name="Button With Inner Func"
          onClick={() => alert("Func inner")}
        />
        <Button name="Button With Outer Func" onClick={showMessage} />
        <Button
          name="Button With Params"
          onClick={() => {
            showCustomMessage("Bob");
          }}
        />
      </div>
    </div>
  );
}

export default Lesson04;
