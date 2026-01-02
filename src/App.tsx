import Loader from "./components/Loader/Loader";
import "./App.css";
import Hero from "./components/Hero/hero";

const App = () => {
  return (
    <>
      <Loader />
      <div className="app-root">
        <Hero />
      </div>
    </>
  );
};

export default App;
