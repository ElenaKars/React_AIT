import "./styles.css";

function Product({ name, price }) {
  return (
    <div className="product-wrapper">
      <h3 className="name">{name}</h3>
      <div className="price">{price}</div>
    </div>
  );
}

export default Product;
