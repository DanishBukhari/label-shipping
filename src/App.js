import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';


const App = () => {
  return (

    <>
      <Router>
        <Navbar /> 
        this is the navbar
        <Routes>
          <Route exact path="/" element={<Home />}>
            
          </Route>
          <Route exact path="/about" element={<About/>}>
            
          </Route> 
        </Routes>
      </Router>
    </>
   
  )
}

export default App