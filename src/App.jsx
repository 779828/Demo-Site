import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-300 dark:bg-gray-800 scrollbar-none overflow-y-scroll ">
        <Header />
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
