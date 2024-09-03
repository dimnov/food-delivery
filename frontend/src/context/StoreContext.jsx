import { createContext, useEffect, useState } from "react";
import { getAllItems } from "../services/apiItems";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodList] = useState([]);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId]) {
      setCartItems((prev) => {
        const updatedCart = { ...prev };

        if (updatedCart[itemId] > 1) {
          updatedCart[itemId] -= 1;
        } else {
          delete updatedCart[itemId];
        }

        return updatedCart;
      });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      let itemInfo = foodList.find((product) => product._id === item);

      totalAmount += itemInfo.price * cartItems[item];
    }

    return totalAmount;
  };

  const getCartItemsLength = () => {
    const length = Object.keys(cartItems).length;
    return length;
  };

  const fetchFoodList = async () => {
    try {
      const items = await getAllItems();
      setFoodList(items);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
    };

    loadData();
  }, []);

  const contextValue = {
    foodList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getCartItemsLength,
  };

  return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};

export default StoreContextProvider;
