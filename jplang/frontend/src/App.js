import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles.css';
import Home from "./components/base/Home";
import Multi from "./components/mutiple-choice/Multi";
import Subject from "./components/subjective/Subject";
import Dictionary from "./components/dictionary/Dictionary";
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/multiple-chhoice" element={<Multi></Multi>} />
        <Route path="/subject" element={<Subject></Subject>} />
        <Route path="/dictionary" element={<Dictionary></Dictionary>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;