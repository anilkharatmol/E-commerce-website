import { Switch,Route, Redirect } from "react-router-dom";
import About from "./Components/Pages/About";
import Root from "./Root";
import Home from "./Components/Pages/Home";
import ContactUS from "./Components/Pages/ContactUs";
import ProductDetails from "./Components/Pages/ProductDetails";
import Login from "./Components/Pages/Login";
import { useContext ,useCallback,useEffect} from "react";
import AuthContext from "./Store/LoginContext";
import SignUp from "./Components/Pages/SignUp";
import CartContext from "./Store/CartContext";



const App=()=> {
const authcxt=useContext(AuthContext);


  return (
  <Switch>
      <Route path='/' exact>
     {authcxt.isLoggedIn && <Root/>}
     {!authcxt.isLoggedIn && <Redirect to='/login'></Redirect>}
    </Route>
  <Route path='/about'>
  {authcxt.isLoggedIn && <About/>}
     {!authcxt.isLoggedIn && <Redirect to='/login'></Redirect>}
    </Route>
    <Route path='/home'>
    {authcxt.isLoggedIn && <Home/>}
     {!authcxt.isLoggedIn && <Redirect to='/login'></Redirect>}
    </Route>
    <Route path='/contactus'>
    {authcxt.isLoggedIn && <ContactUS/>}
     {!authcxt.isLoggedIn && <Redirect to='/login'></Redirect>}
    </Route>
    <Route path='/login'>
      <Login/>
    </Route>
    <Route path='/signup'>
      <SignUp/>
    </Route>
    <Route path='/productdetails/:productname'>
    {authcxt.isLoggedIn && <ProductDetails/>}
     {!authcxt.isLoggedIn && <Redirect to='/login'></Redirect>}
    </Route>
  </Switch>
  );
}

export default App;
