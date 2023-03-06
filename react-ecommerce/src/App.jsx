import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <a href={`/product/${product.slug}`}>
              <img
                className="img-product"
                src={product.image}
                alt={product.name}
              />
            </a>
            <div className="product-info">
              <a href={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </a>
              <p><strong>${product.price}</strong></p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
