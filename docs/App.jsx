/** @format */

import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Results_summary_component from "./challenges/components/Results_summary_component";
import HomePage from "./HomePage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Challenge_1' element={<Results_summary_component />} />
      </Routes>
    </div>
  );
}

export default App;
