import { createContext, useContext, useEffect, useState } from "react";

const AddToCartContext = createContext({});
const initialCartItems = localStorage.getItem("shoping-Cart_Items")
  ? JSON.parse(localStorage.getItem("shoping-Cart_Items"))
  : [];

const AddToCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  useEffect(() => {
    localStorage.setItem("shoping-Cart_Items", JSON.stringify(cartItems));
  }, [cartItems]);
  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseItemsQuantity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseItemsQuantity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => (item.id === id) == null)) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItems = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  return (
    <AddToCartContext.Provider
      value={{
        cartItems,
        increaseItemsQuantity,
        decreaseItemsQuantity,
        getItemsQuantity,
        removeItems,
        cartQuantity,
      }}
    >
      {children}
    </AddToCartContext.Provider>
  );
};
export default AddToCartProvider;

export const useAddToCart = () => {
  return useContext(AddToCartContext);
};
