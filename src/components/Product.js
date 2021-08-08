import React from "react";
//import "./Product.css";

const Product = (props) => {
  return (
    <tbody>
      {props.fields.map((expense) => (
        <tr key={expense.ID}>
          <td>{expense.ID}</td>
          <td>{expense.ProductName}</td>
          <td>{expense.Quantity}</td>
          <td>{expense.Price}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Product;
