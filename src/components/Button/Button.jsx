import "./styles.css";

// const props = {
// name: <the property >
// }
function Button({
  id,
  name,
  type = "button",
  onClick,
  imgSrc = "",
  altImg = "",
}) {
  //   const { name } = props;
  return (
    <button id={id} className="main-button" type={type} onClick={onClick}>
      {name}
      {imgSrc && <img src={imgSrc} alt={altImg} className="button-image" />}
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
