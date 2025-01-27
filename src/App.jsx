import { useReducer, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutIndonesia from "./components/AboutIndonesia";
import Footer from "./components/Footer";

function App() {
  let footerRef = useRef(null);
  return (
    <main className="reltaive">
      <Navbar footerRef={footerRef} />
      <Hero />
      <AboutIndonesia />
      <Footer footerRef={footerRef} />
    </main>
  );
}

export default App;
