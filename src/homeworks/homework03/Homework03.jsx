import Button from "../../components/Button/Button";
import Input from "../../components/input/Input";
import "./styles.css";

function Homework03() {
  return (
    <div className="homework03-wrapper">
      <form className="form-wrapper">
        <Input name="email" placeholder="Enter your email" label="Email*" />
        <Button name="Send email" />
      </form>
    </div>
  );
}

export default Homework03;
