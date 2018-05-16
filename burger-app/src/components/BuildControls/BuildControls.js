import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" }
];

const buildControls = props => {
  const buildIngredientsList = controls.map(dict => (
    <BuildControl
      key={dict.type}
      label={dict.label}
      add={() => props.addIngredients(dict.type)}
      remove = {() => props.removeIngredients(dict.type)} 
      disableIng = {props.disabled[dict.type]}
    />
  ));
  return <div className={classes.BuildControls}>{buildIngredientsList}</div>;
};

export default buildControls;
