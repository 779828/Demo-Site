import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="bg-gray-300 dark:bg-gray-800 scrollbar-none overflow-y-scroll">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
