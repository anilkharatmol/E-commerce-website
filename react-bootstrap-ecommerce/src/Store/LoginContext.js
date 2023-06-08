import React, { useState } from "react"

 const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})


export  function AuthContextProvider(props){
    const firstToken=localStorage.getItem('token');
    const[token,setToken]=useState(firstToken);
    
    const userIsLoggedIn=!!token;
    
    function loginHandler(token){
        setToken(token)
        localStorage.setItem('token',token);
       
    }

    function logoutHandler(){
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }

    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }

   return( <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthContext;