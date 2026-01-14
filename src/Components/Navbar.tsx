import "./Navbar.css";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";

function Navbar(){
    useEffect(()=>{
        gsap.fromTo(".head",{opacity:0,scale:0},{opacity:1,scale:1,duration:2});
    },[]);
    return(
        <div>
            <div className="head"> 
                <ul>
                    <li><img src="/loggo.png"></img></li>
                    <li><a href="Home">home</a></li>
                    {/* <li><a href="#support">Support</a></li> */}
                    <li><a href="Contact">contact</a></li>
                    <li><Link to="About">about</Link></li> 
                </ul>
            </div>
            <hr className="hr"></hr>
        </div>
    );
}
export default Navbar;