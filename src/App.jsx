import About from "./components/About";
import Bento from "./components/Bento";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="bg-gray-300 dark:bg-gray-800 scrollbar-none overflow-y-scroll ">
        <Header />
        <Hero />
        <About />
        <Bento />
        <Footer />
      </div>
    </>
  );
}

export default App;
