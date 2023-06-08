import classes from './ContactUs.module.css';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function ContactUS(){

    const nameRef = useRef('');
    const emailRef = useRef('');
    const phonenumberRef = useRef('');
  
   async function submitHandler(event) {
      event.preventDefault();
  
    
  
      const obj = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phonenumber: phonenumberRef.current.value,
      };
  
      const response=await fetch('https://react-movies-a8fde-default-rtdb.firebaseio.com/UserDetails.json',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
          'Content-type':'application/json'
        }
      })
      const data=await response.json();
        console.log(data);
    }


    return(
        <div >
        <header className={classes.h}>
 <ul className="header">
   <li ><NavLink className={()=>"list"} to='/home'>Home</NavLink></li>
   <li ><NavLink className={()=>"list"} to='/'>Store</NavLink></li>
   <li> <NavLink className={()=>"list"} to='/about'>About</NavLink></li>
   <li><NavLink className={() => "list"} to="/contactus">   Contact Us</NavLink></li>
   </ul>
</header>

        <form onSubmit={submitHandler}>
            <h1 className={classes.h1}>ENTER YOUR DETAILS</h1>
        <div className={classes.control}>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email id:</label>
            <input type="email" id='email' ref={emailRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='phonenumber'>Phone Number:</label>
          <input type='number' id='phonenumber' ref={phonenumberRef} />
        </div>
        <div className={classes.control}>
        <button type='submit'>Submit</button>
        </div>
      </form>
      <footer style={{color:'white',backgroundColor:'CaptionText',textAlign:'center'}}><h1>The Generics</h1></footer>
      </div>
    )
}