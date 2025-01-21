import "./styles.css";

function Input({ name, type = "text", placeholder, label }) {
  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <input
        className="input"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
