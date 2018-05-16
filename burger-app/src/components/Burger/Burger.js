import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key])].map((_, i) => {
        return <BurgerIngredient key={key + i} type={key} />;
      });
    })
    .reduce((prev, elem) => prev.concat(elem), []);

  if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please add the ingredients to the burger</p>;
  }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
      <div> Price : {props.totalPrice} </div>
    </div>
  );
};

export default burger;
