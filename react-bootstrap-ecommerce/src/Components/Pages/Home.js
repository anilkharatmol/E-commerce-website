import { NavLink } from "react-router-dom";
import classes from './Home.module.css'

export default function Home(){
    return(
        <div>
        <header className={classes.h}>
 <ul className="header">
   <li ><NavLink className={()=>"list"} to='/home'>Home</NavLink></li>
   <li ><NavLink className={()=>"list"} to='/'>Store</NavLink></li>
   <li ><NavLink className={()=>"list"} to='/about'>About</NavLink></li>
   <li>
            <NavLink className={() => "list"} to="/contactus">
              Contact Us
            </NavLink>
          </li>
   </ul>
        <h1 style={{textAlign:"center",fontFamily:'-moz-initial',fontWeight:'bold', backgroundColor:"grey",color:"white",fontSize:'150px',padding:'40px'}}>
The Generics</h1> 
<button className={classes.latest}>Get Our Latest Album</button>
<button className={classes.play} >PLAY</button>
</header>

<section className={classes.container}>
    <h1 style={{fontFamily:'fantasy',textAlign:'center'}}>TOURS</h1>
    <div>
<div className={classes.touritem}>
                 <span className={classes["tour-date"]}>JUL16</span>
                <span className={classes["tour-place"]}>DETROIT, MI</span>
           <span className={classes["tour-spec-place"]}>DTE ENERGY MUSIC THEATRE</span>
                 <button className={classes["buy-btn"]}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
                 <span className={classes["tour-date"]}>JUL19</span>
                <span className={classes["tour-place"]}>TORONTO,ON</span>
           <span className={classes["tour-spec-place"]}>BUDWEISER STAGE</span>
                 <button className={classes["buy-btn"]}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
              <span className={classes["tour-date"]}>JUL 22</span>
             <span className={classes["tour-place"]}> BRISTOW, VA</span>
        <span className={classes["tour-spec-place"]}>JIGGY LUBE LIVE</span>
              <button className={classes["buy-btn"]}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
                 <span className={classes["tour-date"]}>JUL 29</span>
                <span className={classes["tour-place"]}>PHOENIX, AZ</span>
           <span className={classes["tour-spec-place"]}> AK-CHIN PAVILION</span>
                 <button className={classes["buy-btn"]}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
                <span className={classes["tour-date"]}>AUG 2</span>
               <span className={classes["tour-place"]}>LAS VEGAS, NV</span>
          <span className={classes["tour-spec-place"]}>T-MOBILE ARENA</span>
                <button className={classes["buy-btn"]}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
             <span className={classes["tour-date"]}>AUG 7</span>
            <span className={classes["tour-place"]}>CONCORD, CA</span>
       <span className={classes["tour-spec-place"]}> CONCORD PAVILION</span>
             <button className={classes["buy-btn"]}>BUY TICKETS</button>
            </div>
            </div>
</section>
<footer style={{color:'white',backgroundColor:'CaptionText',textAlign:'center'}}><h1>The Generics</h1></footer>
</div>

    )
}