// import Hero from './Components/Hero';
// import {Routes,Route} from "react-router-dom";
// import About from "./Components/About.tsx";
// import Navbar from './Components/Navbar';
// function App(){
//   return(
//     <div>
//       <Navbar/>
//       <Route path="/" element={<Hero/>}/>
//       <Route path="/About" element={<About/>}/>
//     </div>
//   );
// }
// export default App;
import Hero from './Components/Hero';
import Contact from "./Components/Contact.tsx";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About.tsx";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>  {/* This wrapper is essential */}
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Hero />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;