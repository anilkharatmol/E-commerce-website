import React from "react";
import { Card,Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { Link } from "react-router-dom";

export default function Item(props){
    const Ctx=useContext(CartContext);

    function addItemToCart(event){
        event.preventDefault();
        let quantity=1;
     Ctx.addItem({...props,quantity:quantity});
     console.log(Ctx);
    }

    
    return  (
        <div  style={{ display: 'flex',
            margin: '1rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid #ccc'}} >
        <Card   style={{ width: '20rem',marginLeft:'10cm'}}>
    <Card.Body>
  <Card.Header><h2 style={{fontFamily:'cursive'}}>{props.title}</h2></Card.Header>
<Link to={`/productdetails/${props.title}`}><Card.Img  variant="top" src={props.imageUrl} /></Link>
  <Card.Text><h3>RS {props.price}</h3></Card.Text>
  <Card.Footer>
  <Button variant="primary" onClick={addItemToCart}>ADD TO CART</Button>
  </Card.Footer>
</Card.Body>
</Card>
</div>
  );
}