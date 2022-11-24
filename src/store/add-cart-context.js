import React, { useState, useEffect } from "react";

const AddCartContext = React.createContext({
  cartItems: [],
  onAddCart: () => {},
});

export const AddCartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems >= 1) console.log(storedCartItems);
  });
  const addCartHandler = (items) => {
    console.log(items);
    // setCartItems([event.target.value]);
    // localStorage.setItem("cart", cartItems);
    // console.log(cartItems);
  };
  return (
    <AddCartContext.Provider
      value={{
        cartItems: cartItems,
        onAddCart: addCartHandler,
      }}
    >
      {props.children}
    </AddCartContext.Provider>
  );
};

export default AddCartContext;
