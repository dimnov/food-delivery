import { createContext, useEffect, useState } from "react";
import { getAllItems } from "../services/apiItems";
import useGetCartItems from "../hooks/useGetCartItems";
import useAddItem from "../hooks/useAddItem";
import { useSession } from "../hooks/useSession";
import useRemoveItem from "../hooks/useRemoveItem";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [foodList, setFoodList] = useState([]);

  const { addItem } = useAddItem();
  const { removeItem } = useRemoveItem();

  const { session } = useSession();
  const userId = session?.user.id;

  const { cartItems, isPending: isPendingCartItems } = useGetCartItems(userId);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      cartItems[itemId] = 1;
    } else {
      cartItems[itemId] += 1;
    }

    addItem({ cartItems, userId });
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      cartItems[itemId] -= 1;

      removeItem({ cartItems, userId });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      let itemInfo = foodList.find((product) => product.id.toString() === item.toString());

      totalAmount += itemInfo.price * cartItems[item];
    }

    return totalAmount;
  };

  const getCartItemsLength = () => {
    const allValuesZero = Object.values(cartItems).every((v) => v === 0);
    return allValuesZero;
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
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getCartItemsLength,
    isPendingCartItems,
  };

  return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};

export default StoreContextProvider;
