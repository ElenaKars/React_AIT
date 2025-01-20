import "./styles.css";

// const props = {
// name: <the property >
// }
function Button({ name = "Send" }) {
  const buttonType = "submit";
  //   const { name } = props;
  return (
    <button className="main-button" type={buttonType}>
      {name}
    </button>
  );
}

//default export must be only one in the file

export default Button;

// import './styles.css';

// function Button () {
//     const isGetButton = true;
//     const typeButton = 'submit';
//     return <button className="main-button" type={typeButton}>{isGetButton ? "GET" : "SEND"}</button>
// }

// //default export must be only one in the file

// export default Button;
