import CartContext from "../../Store/CartContext";
import React,{useContext,useEffect,useCallback} from "react";
import { Button,Badge } from "react-bootstrap";

export default function CartButton(props){
    const Ctx= useContext(CartContext);
let quantity=0;

Ctx.items.forEach((item)=>{
    quantity=quantity+item.quantity;
})


const newEmailId = localStorage.getItem('email').replace(/[.@]/g,""); 
const firebaseUrl=`https://crudcrud.com/api/49548bbbeaf84b8492a68fdd7577e404/cart${newEmailId}`;

const fetchExpensesHandler=useCallback(async ()=>{
  const response=await  fetch(firebaseUrl);
  
  const data= await response.json();

    console.log(data);
    

Ctx.fetchItems(data)
   
},[Ctx,firebaseUrl])

useEffect(()=>{fetchExpensesHandler()},[]);
  
 
 return(
<Button variant="success"  onClick={props.onClick}>Cart
<Badge >{quantity}</Badge></Button>
 )

}