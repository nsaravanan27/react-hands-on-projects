import React from "react";
import Aux from "../../../hoc/Auxillary";

const orderSummary = props => {
  const ingredients = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span> :{" "}
        {props.ingredients[key]}
      </li>
    );
  });
  return (
    <Aux>
      <h2>Your Order</h2>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredients}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummary;
