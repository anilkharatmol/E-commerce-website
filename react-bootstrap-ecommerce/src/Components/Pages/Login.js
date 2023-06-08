import React, { useContext, useRef, useState } from 'react';

import AuthContext from '../../Store/LoginContext';
import classes from './Login.module.css';
import { useHistory ,NavLink} from 'react-router-dom';


const Login = () => {
  const history=useHistory();

  const emailRef=useRef('');
  const passwordRef=useRef('');


  const[isLoading,setIsLoading]=useState(false);

const authcxt=useContext(AuthContext);

function submitHandler(event){
  event.preventDefault();

  const enteredEmail=emailRef.current.value;
  const enteredPassword=passwordRef.current.value;

  localStorage.setItem('email',enteredEmail);

  setIsLoading(true);
  let url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwXOwAnBdsjBSzz1ZdEKkrlHZWgkiUiC8'   
 
  

    fetch(url,
    {
      method:'POST',
      body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true
      }),
        headers:{
          'Content-Type':'application/json'
      }
    }).then(response=>{
      setIsLoading(false);
      if(response.ok){
         return response.json();
      }
      else{
        return response.json().then(()=>{
        let errormessage='Authentication Failed!'
      
        throw new Error(errormessage);
        })
      }
    }).then((data)=>{   authcxt.login(data.idToken)
       setTimeout(()=>{authcxt.logout()},300000)
    history.replace('/')   
           }).catch(err=>{alert(err.message)})
  
}


  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required ref={passwordRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading &&<button>Login</button>}
          {isLoading && <h2>Sending request...</h2>}
        </div>
        <h6 style={{textAlign:'center',color:'white'}}>Don't have an account?<NavLink to='/signup'>Signup</NavLink></h6>
      </form>
    </section>
  );
};

export default Login;
