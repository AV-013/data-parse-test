import React from "react";
import Product from "./Product";
import "./Product.css";

const ProductList = (props) => {
  const keys = Object.keys(props.products[0]);
  return (
    <table>
      <thead>
        <tr>
          {keys.map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <Product fields={props.products} />
    </table>
  );
};

export default ProductList;
