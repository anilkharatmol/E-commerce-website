import {  useRef,useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Login.module.css';

export default function SignUp(){

    const emailRef=useRef('');
    const passwordRef=useRef('');
    const confirmPasswordRef=useRef('');

    const[isLoading,setIsLoading]=useState(false);

    function submitHandler(event){
        event.preventDefault();
        const enteredEmail=emailRef.current.value;
        const enteredPassword=passwordRef.current.value;
        const enteredConfirmPassword=confirmPasswordRef.current.value;

        setIsLoading(true);

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwXOwAnBdsjBSzz1ZdEKkrlHZWgkiUiC8',
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
              if(response.ok && enteredPassword===enteredConfirmPassword){
                 return response.json();
              }
              else{
                return response.json().then(()=>{
                  let errormessage='Authentication Failed!';
                  throw new Error(errormessage);
                  })
              }
            }).then((data)=>{console.log(`${data.email} User has successfully signed up`)
            alert('User has successfully signed up');}).catch(err=>{alert(err.message)})
    }

    return (
        <section className={classes.auth}>
          <h1>SignUp</h1>
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
            <div className={classes.control}>
              <label htmlFor='confirmpassword'>Confirm Password</label>
              <input
                type='password'
                id='confirmpassword'
                required ref={confirmPasswordRef}
              />
            </div>
          
            <div className={classes.actions}>
              {!isLoading &&<button>SignUp</button>}
              {isLoading && <h2>Sending request...</h2>}
            </div>
            <h6 style={{textAlign:'center',color:'white'}}>Already have an account?<NavLink to='/login'>Login</NavLink></h6>
          </form>
        </section>
      );
    };
    