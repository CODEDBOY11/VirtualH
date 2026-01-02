import Loader from "./components/Loader/Loader";
import "./App.css";
import Hero from "./components/Hero/hero";
import About from "./components/about/about";

const App = () => {
  return (
    <>
      <Loader />
      <div className="app-root body">
        <Hero />
      </div>
      <div className="body">
        <About />
      </div>
    </>
  );
};

export default App;
