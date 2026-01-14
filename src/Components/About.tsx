import "./About.css";
import gsap from "gsap";
import { useEffect } from "react";
import { TextPlugin } from "gsap/all";
function About(){
    useEffect(()=>{
        gsap.registerPlugin(TextPlugin);
        gsap.fromTo(".txt",{text:""},{
            text:"Hey, I'm Quintin Goldberg, I'm 3rd year software engineering student and 3d artist with a strong intrest in modern web technology and UI/UX experiences.here I built a fan-made iPhone 17 concept website, the website is developed using react framework, CSS, GSAP, three.js to create a smooth animation and for the visuals and i integrated a 3D model of the iPhone 17 pro that was avilable in sketchfab by ranguel(check out his amazing 3D mork), im trying to focus on highly interactive and immersive user experience, inspired by premium product websites ",
            duration:15,ease:"none"
        
        });
    },[]);
    return(
        <div className="abt">
            <h1 className="txt"></h1>
        </div>
    );
}
export default About;