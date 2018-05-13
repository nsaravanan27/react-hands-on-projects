import React from "react";
import classes from "./BurgerIngredient.css";

const burgerIngredient = props => {
  let ingredients = null;

  switch (props.type) {
    case "bread-bottom":
      ingredients = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredients = (
        <div className={classes.BreadTop}>
          <div className={classes.seeds1} />
          <div className={classes.seeds2} />
        </div>
      );
      break;
    case "meat":
      ingredients = <div className={classes.Meat} />;
      break;
    case "cheese":
      ingredients = <div className={classes.Cheese} />;
      break;
    case "salad":
      ingredients = <div className={classes.Salad} />;
      break;
    case "bacon":
      ingredients = <div className={classes.Bacon} />;
      break;
    default:
      ingredients = null;
  }
  return ingredients;
};

export default burgerIngredient;
