import { useState } from "react";
import CartContext from "./CartContext";

export default function CartProvider(props) {
  const [items, updateItems] = useState([]);

  async function addItemToCartHandler(item) {
    const existingItemIdx = items.findIndex((i) => i.id === item.id);

    if (existingItemIdx === -1) {
      updateItems([...items, item]);
    } else {
      const temp = [...items];
      temp[existingItemIdx].quantity = temp[existingItemIdx].quantity + 1;
      updateItems(temp);
    }

    let newEmailId = localStorage.getItem("email").replace(/[.@]/g, "");

    await fetch(
      `https://crudcrud.com/api/49548bbbeaf84b8492a68fdd7577e404/cart${newEmailId}`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  }

  function reduceQuantityHandler(item) {
    const existingItemIdx = items.findIndex((i) => i.id === item.id);
    const temp = [...items];

    if (temp[existingItemIdx].quantity > 1) {
      temp[existingItemIdx].quantity = temp[existingItemIdx].quantity - 1;
      updateItems(temp);
    }
  }

  function removeItemFromCartHAndler(id) {
    const temp = [...items];
    let a = temp.filter((index) => index.id !== id);
    updateItems(a);
  }

  function fetchItemsHandler(fetchedData) {
    updateItems(fetchedData);
  }

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    reduceQuantity: reduceQuantityHandler,
    removeItem: removeItemFromCartHAndler,
    fetchItems: fetchItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

