import Loader from "./components/Loader/Loader";
import "./App.css";
import Hero from "./components/Hero/hero";
import About from "./components/about/about";
import Serve from "./components/serve/serve";
import Navbar from "./components/navbar/navbar";
import { useState } from "react";
import Menu from "./components/menu/menu";
import Vision from "./components/vision/vision";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      <Navbar />
      {!loading && <Menu />}
      <div className="app-root body">
        <Hero loading={loading} />
      </div>

      <div className="body">
        <About />
        <Serve />
        <Vision />
      </div>
    </>
  );
};

export default App;
