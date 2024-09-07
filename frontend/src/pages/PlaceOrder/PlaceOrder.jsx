import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);

  const totalPrice = getTotalCartAmount();
  const deliveryFee = getTotalCartAmount() >= 30 ? 0 : 5;

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Phone number" />
        </div>

        <input type="email" placeholder="Email address" />
        <div className="multi-fields">
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="City" />
        </div>
        <input type="text" placeholder="Street" />
      </div>
      <div className="place-order-right">
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
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
