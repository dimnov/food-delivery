import FoodItem from "../FoodItem/FoodItem";
import useGetAllItems from "../../hooks/useGetAllItems";
import "./FoodDisplay.css";

function FoodDisplay({ category }) {
  const { items } = useGetAllItems();

  const filteredFoodList =
    category === "all" ? items : items.filter((food) => food.category === category);

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
