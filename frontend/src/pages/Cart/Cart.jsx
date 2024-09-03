import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import useGetAllItemsFromCart from "../../hooks/useGetAllItemsFromCart";

function Cart() {
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const ids = Object.keys(cartItems);

  const { items } = useGetAllItemsFromCart(ids);
  console.log(items);

  const totalPrice = getTotalCartAmount();
  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 5;

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {items.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={item.image} alt="food image" />
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>x{cartItems[item.id]}</p>
                  <p>${(item.price * cartItems[item.id]).toFixed(2)}</p>
                  <p className="cross" onClick={() => removeFromCart(item.id)}>
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${(totalPrice + deliveryFee).toFixed(2)}</p>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Enter your promo code here:</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="123abc123" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
