import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar1'
import Services from './components/Services'
import { Routes, Route } from "react-router-dom";
import Gallery from './components/Gallery';
// import Footer from './components/Footer';
import ContactForm from './components/Contact';


function App() {

  return (
    <div className="App">
    <Navbar/>
    <Routes>

    <Route path="/" element={<LandingPage/>} />

    <Route path="/services" element={<Services/>} />

    <Route path="/portfolio" element={<Gallery/>} />

    <Route path="/contact" element={<ContactForm/>} />

    
    </Routes>
    
      {/* <Footer/> */}
      
      
    </div>
  )
}

export default App
