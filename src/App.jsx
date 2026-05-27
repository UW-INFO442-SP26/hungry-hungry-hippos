import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Practice from "./components/Practice";
import Home from "./components/Home";
import About from "./components/About";



function Contact() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Contact</h1>
      <p>Contact page.</p>
    </main>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </div>
  );
}

export default App;
