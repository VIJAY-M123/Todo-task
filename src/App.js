import React from 'react';
import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Login from './Components/Login';
import Register from './Components/Register';
import Index from "./Components/Navbar/Index";


function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<Index/>}/>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
