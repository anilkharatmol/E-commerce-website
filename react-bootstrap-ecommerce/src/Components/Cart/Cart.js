import { Button, Card, Image,Overlay} from "react-bootstrap";
import React, { useContext,useState,useRef } from "react";
import CartContext from "../../Store/CartContext";


const Cart=(props)=>{

    const [show, setShow] = useState(false);
  const target = useRef(null);
  
    const Ctx=useContext(CartContext)

        const element =( <div >
                { Ctx.items.map((item) => (
                  <Card  key={item.id} style={{width:'15rem'}}>
                    <div style={{borderBottom:'1px solid #ddd',marginBottom:'1cm'}}>
                        <h3>{item.title}</h3>
                        <Image style={{border:'1px solid #ddd',borderRadius:'4px',padding: '5px',width: '150px'}} src={item.imageUrl}></Image>

                            <h4>Rs {item.price}</h4>
                        <h5> Quantity:{item.quantity}</h5>
                        <Button variant="secondary" style={{float:'left',margin:'1rem'}} onClick={()=>{Ctx.addItem(item)}}>+</Button>
                        <Button variant="secondary" style={{float:'left',margin:'1rem'}} onClick={()=>{Ctx.reduceQuantity(item)}}>-</Button>
                        <Button variant="danger" style={{float:'right'}} onClick={()=>{Ctx.removeItem(item.id)}}>REMOVE</Button>

                        </div>
                        </Card>
                ))}
                    </div>)

  
  let totalPrice=0;
  Ctx.items.forEach(( item) => {
    (totalPrice += item.price * item.quantity)
  });


 


  
  
  
  return(   <React.Fragment >
                <h1 style={{textAlign:"center"}}> SHOWING CART ITEMS</h1>
          
                <Button variant="danger" style={{float:'right'}} onClick={props.onHide}>Close Cart X</Button>
            <Button variant="success"  style={{float:'right'}}  ref={target} onClick={()=>{setShow(!show)}} >
        Open Cart
      </Button>
      <Overlay target={target.current} show={show} placement="left">
          <div
            style={{
              margin:'5rem 0',
              marginBottom:'2cm',
                position: "absolute",
                top:'2cm',
                left: '5%',
                width: '30%',
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '5px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
                Zindex: '10',
                Animation: 'slide-down 300ms ease-out forwards'
            }}
          >
            {element}
          <h3 style={{fontFamily:'fantasy',color:'#04675f'}}>Total Price: {totalPrice}</h3>
          </div>
      </Overlay>
        </React.Fragment>
         )

      
      }


export default Cart;