import { useState } from 'react'

import './App.css'
import Login from "./Login/Login";
import Home from "./Home/Home";
import { Routes ,Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
    </div>
  )
}

export default App
