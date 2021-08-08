import React from "react";
import ProductList from "./ProductList";

const AllProductsPage = (props) => {
  return (
    <div>
      <h1>Products List</h1>
      <ProductList products={props.items} />
    </div>
  );
};

export default AllProductsPage;
