import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-300 dark:bg-gray-800 scrollbar-none overflow-y-scroll">
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
