import Product from "../../components/product/Product";
import "./styles.css";
import { products } from "./data";

function Homework05() {
  const productCard = products.map((product) => {
    const nameWithDots = `${product.name}`.padEnd(23, ".");
    return (
      <Product
        key={product.id}
        name={nameWithDots}
        price={`${product.price}$`}
      />
    );
  });
  return <div className="homework05-wrapper">{productCard}</div>;
}

export default Homework05;
