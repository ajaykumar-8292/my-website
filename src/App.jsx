import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Reviews from "./Pages/Reviews";
import Contact from "./Pages/Contact";




function App() {
  return (
    <BrowserRouter>
    <Header />
    <Navbar />
  
    
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/services" element={<Services />} />
           <Route path="/reviews" element={<Reviews />} />
           <Route path="contact" element={<Contact />} />
           
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;