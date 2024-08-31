import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  const filteredFoodList =
    category === "all" ? food_list : food_list.filter((food) => food.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredFoodList?.map((food, index) => {
          return <FoodItem key={index} food={food} />;
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
