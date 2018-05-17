import React from "react";
import Aux from "../../../hoc/Auxillary";
import Button from "../../UI/Button/Button";

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
      <p><strong>Total Price:{props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button clicked={props.onCancel} btnType="Danger">CANCEL</Button>
      <Button clicked={props.onSuccess} btnType="Success">CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
