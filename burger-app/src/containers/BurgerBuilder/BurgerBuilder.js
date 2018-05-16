import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

const INGREDIENTS_PRICE = {
  salad: 4,
  meat: 20,
  bacon: 10,
  cheese: 5
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0
    },
    totalPrice: 4
  };

  addIngredientsHandler = type => {
    const oldIngredients = this.state.ingredients;
    const oldCount = oldIngredients[type];
    const updatedCount = oldCount + 1;

    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const updatedPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  removeIngredientsHandler = type => {
    const oldIngredients = this.state.ingredients;
    const oldCount = oldIngredients[type];
    let updatedCount = 0;
    let updatedPrice = this.state.totalPrice;
    if (oldCount >= 1) {
      updatedCount = oldCount - 1;
      updatedPrice -= INGREDIENTS_PRICE[type];
    }

    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  render() {
    const disabledIngredients = {
      ...this.state.ingredients
    };
    for (var key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    console.log(disabledIngredients);

    return (
      <Aux>
        <Burger
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
        />
        <BuildControls
          addIngredients={this.addIngredientsHandler}
          removeIngredients={this.removeIngredientsHandler}
          disabled={disabledIngredients}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
