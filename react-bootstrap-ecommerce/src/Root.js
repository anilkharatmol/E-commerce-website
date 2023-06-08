import "./App.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Item from "./Components/Item";
import CartButton from "./Components/Cart/CartButton";
import { useContext } from "react";
import AuthContext from "./Store/LoginContext";

export default function Root() {
  const productsArr = [
    {
      id: Math.random().toString(),
      title: "Black shirt",

      price: 1000,

      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/w/x/x/m-srt-001-black-moonvelly-original-imaghzu2jqwfw7ap.jpeg?q=70",
    },

    {
      id: Math.random().toString(),
      title: "Jeans",

      price: 800,

      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/k7dnonk0/jean/y/h/z/32-11274630-roadster-original-imafpmrerqbhyb6t.jpeg?q=70",
    },

    {
      id: Math.random().toString(),
      title: "Yellow T-shirt",

      price: 400,

      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/jsrtn680/t-shirt/5/t/s/5xl-tshirt400mustard-chkokko-original-imafb9yxkxzgmxa5.jpeg?q=70",
    },

    {
      id: Math.random().toString(),
      title: "White Kurta",

      price: 600,

      imageUrl:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/w/y/2/m-white-kurta-taruncollection-original-imag7h4ghqhwgunw.jpeg?q=70",
    },
  ];

  const authcxt=useContext(AuthContext);

  const item = productsArr.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
      quantity={1}
    ></Item>
  ));

  const [showCart, setShowCart] = useState(false);

  function onShow() {
    setShowCart(true);
  }

  function hideCart() {
    setShowCart(false);
  }


  
  return (
    <CartProvider>
      <header>
        <ul className="header">
          <li>
            <NavLink className={() => "list"} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={() => "list"} to="/">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink className={() => "list"} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={() => "list"} to="/contactus">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink className={() => "list"} to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <CartButton onClick={onShow}></CartButton>
          </li>
          <li><Button style={{marginLeft:'1cm'}} variant="danger"  onClick={authcxt.logout}>Logout</Button></li>
        </ul>
      </header>
      {showCart && <Cart onHide={hideCart} > </Cart>}
      <h1
        style={{
          textAlign: "center",
          fontFamily: "-moz-initial",
          fontWeight: "bold",
          backgroundColor: "grey",
          color: "white",
          fontSize: "150px",
          padding: "40px",
        }}
      >
        The Generics
      </h1>
      <h3 style={{ textAlign: "center" ,fontFamily:'fantasy'}}>Products</h3>
      <Container className="mb-2">{item}</Container>
      <Button
        variant="info"
        style={{ marginLeft: "15cm", marginBottom: "1cm" }}
      >
        {" "}
        See the Cart
      </Button>
      <footer
        style={{
          color: "white",
          backgroundColor: "CaptionText",
          textAlign: "center",
        }}
      >
        <h1>The Generics</h1>
      </footer>
    </CartProvider>
  );
}
