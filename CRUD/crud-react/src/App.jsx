import Axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Router, Route, Routes } from "react-router-dom";
import Home from './Home'
import Add from './Add'
import Delete from './Delete'
import Edit from './Edit'
import View from './View'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/view" element={<View />} />
      </Routes>

    </div>
  )
}

export default App
