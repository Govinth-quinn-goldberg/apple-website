import {Suspense} from "react";
import {useEffect,useRef} from "react";
import { Group } from "three";
import "./Hero.css";
import {useFrame} from '@react-three/fiber';
import {Canvas} from "@react-three/fiber";
import {useGLTF,Center,OrbitControls}from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Model() {
  const ref = useRef<Group | null>(null);
  const scroll = useRef(0);
  const { scene } = useGLTF("/scenes.gltf");
  
  useEffect(() => {
    const onScroll = () => {
      scroll.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y = scroll.current * 0.0025;
    ref.current.position.y = 2.09 - scroll.current * 0.003;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} position={[0,0,0.5]} scale={10} />
    </group>
  );
}

function Hero(){
    useEffect(()=>{
        gsap.fromTo(".text",{opacity:0,scale:0},{opacity:1,scale:1,duration:3,ease:"slow.out"})
    },[]);
    useEffect(()=>{
        gsap.fromTo(".subhead",{opacity:0,y:80},{opacity:1,y:0,duration:1.5,
            scrollTrigger:{
                trigger:".subhead",
                start:"top 70%",
                end:"bottom 30%",
                toggleActions:"play reverse play reverse",
            }
        });
    },[]);
    
    useEffect(()=>{
        gsap.fromTo(".subhead1",{opacity:0,y:80},{opacity:1,y:0,duration:1.5,
            scrollTrigger:{
                trigger:".subhead1",
                start:"top 70%",
                end:"bottom 30%",
                toggleActions:"play reverse play reverse",
            }
        });
    },[]);

    useEffect(()=>{
        gsap.fromTo(".subhead2",{opacity:0,y:80},{opacity:1,y:0,duration:1.5,
            scrollTrigger:{
                trigger:".subhead2",
                start:"top 70%",
                end:"bottom 30%",
                toggleActions:"play reverse play reverse",
            }
        });
    },[]);
    return(
        <div className="world" style={{height:'350vh',width:'100%'}}>
            <div>
                <h2 className="text"><span className="tet">iPhone</span> 17 pro</h2>
                <div className="subhead">
                    <b style={{fontSize:'75px'}}>Display</b><br/><br/>
                    <div className="sub0"> 
                    6.3-inch Super retina XDR display.<br/><br/>
                    resolution: 2622 x 1206 pixels(460 ppi).<br/><br/>
                    proMotion technology with adaptive refresh rate up to 120Hz.<br/><br/>
                    Always-On display support.
                    </div>
                </div>
                <p className="subhead1">
                    <b style={{fontSize:'65px'}}>pro camera system</b><br/><br/>
                    <div className="sub1">
                        48 MP fusion main camera(f/1.78, 24mm).<br/><br/>

                        48 MP Fusion Ultra-Wide (f/2.2, 13mm).<br/><br/>

                        48 MP Fusion Telephoto (f/2.8, 100mm).<br/><br/>

                        3D sensor-shift Optical Image Stabilization.<br/><br/>

                        Up to 16 x optical-quality zoom.<br/><br/>

                        ProRes video recording up to 4K at 120 fps.<br/>
                    </div>
                </p>
                <p className="subhead2">
                        <b style={{fontSize:'65px'}}>Memory & Storage</b><br/><br/>
                        12 GB LPDDR5X RAM for seamless multitasking<br/><br/>

                        Storage options:<br/>

                        <li className="li">256 GB</li><br/>

                        <li className="li">512 GB</li><br/>

                        <li className="li">1 TB</li><br/>
                        Dual eSIM + Nano-SIM support (region-dependent).<br/>
                    </p>
            </div>
            <Canvas camera={{position:[0,1,5]}}>
                <ambientLight intensity={1.5}/>
                <directionalLight position={[10,10,5]} intensity={2}/>
                <OrbitControls enablePan={false} enableZoom={false}/>
                <Suspense fallback={null}>
                    <Center >
                        <Model/>
                    </Center>
                </Suspense>
            </Canvas>
        </div>
    );
    
}
export default Hero;