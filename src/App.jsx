import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Practice from "./components/Practice";

function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Home</h1>
      <p>Welcome to HippoTypes.</p>
    </main>
  );
}

function About() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>About</h1>
      <p>About page.</p>
    </main>
  );
}

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </div>
  );
}

export default App;
