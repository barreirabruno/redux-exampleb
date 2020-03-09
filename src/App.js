import React from "react";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";

function App() {
  return (
    <div>
      <h2>Shopping cart example</h2>
      <hr />
      <ProductsContainer />
      <hr />
      <CartContainer />
    </div>
  );
}

export default App;
