import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-300 dark:bg-gray-800 scrollbar-none overflow-y-scroll ">
        <Header />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
