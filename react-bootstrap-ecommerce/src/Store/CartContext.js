import React from "react";

const CartContext=React.createContext({
    items:[],
    addItem:(item)=>{},
    reduceQuantity:(item)=>{},
    removeItem:(id)=>{},
    fetchItems:(data)=>{}
})

export default CartContext;