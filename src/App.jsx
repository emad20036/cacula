// src/App.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Logic from "../src/components/logic"
import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';



const App = ()=>{
  return (
    <>
    <HashRouter base="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Replace the existing route with Gametable */}
          <Route exact path="/" element={<Logic  />}/>
         
        </Routes>
      </Suspense>
    </HashRouter>
    
    </>
  )
}

export default App;
