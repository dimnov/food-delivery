import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import useGetItemsInCartData from "../../hooks/useGetItemsInCartData";
import Spinner from "../../components/Spinner";
import "./Cart.css";

function Cart() {
  const { removeFromCart, getTotalCartAmount, cartItems, isPendingCartItems, getCartItemsLength } =
    useContext(StoreContext);

  const ids = Object.keys(cartItems);
  const { items, isPending: isPendingItemsData } = useGetItemsInCartData(ids);

  const totalPrice = getTotalCartAmount();
  const deliveryFee = getTotalCartAmount() >= 30 ? 0 : 5;

  const isPending = isPendingCartItems || isPendingItemsData;

  const navigate = useNavigate();

  if (isPending) {
    return <Spinner />;
  }

  const cartItemsLength = getCartItemsLength();

  if (cartItemsLength) {
    return (
      <div className="cart empty">
        <p>Your cart is empty.</p>
        <button onClick={() => navigate("/")}>Go back</button>
      </div>
    );
  }

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
        {items?.map((item) => {
          if (cartItems[item.id] > 0)
            return (
              <div key={item.id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image_url} alt="food image" />
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>x{cartItems[item.id]}</p>
                  <p>${(item.price * cartItems[item.id]).toFixed(2)}</p>
                  <p className="cross" onClick={() => removeFromCart(item.id)}>
                    <ion-icon name="close-outline"></ion-icon>
                  </p>
                </div>
                <hr />
              </div>
            );
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
              <p>
                Delivery Fee <i className="cart-total-details-italic">(Free over $30)</i>
              </p>
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
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
