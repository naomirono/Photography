import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Services from './components/Services'
import { Routes, Route } from "react-router-dom";
import Gallery from './components/Gallery';


function App() {

  return (
    <div className="App">
    <Navbar/>
    <Routes>

    <Route path="/" element={<LandingPage/>} />

    <Route path="/services" element={<Services/>} />

    <Route path="/portfolio" element={<Gallery/>} />
    </Routes>
    
      
      
      
    </div>
  )
}

export default App
