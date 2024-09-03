import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({ food }) {
  const { id, name, price, description, image } = food;

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="food image" />
        {!cartItems[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            alt="button for adding a food"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="button for removing a food"
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)} />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="food rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
