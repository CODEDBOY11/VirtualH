import Loader from "./components/Loader/Loader";
import "./App.css";
import Hero from "./components/Hero/hero";
import About from "./components/about/about";
import Serve from "./components/serve/serve";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <div className="app-root body">
        <Hero />
      </div>
      <div className="body">
        <About />
        <Serve />
      </div>
    </>
  );
};

export default App;
