import Loader from "./components/Loader/Loader";
import "./App.css";
import Hero from "./components/Hero/hero";
import About from "./components/about/about";
import Serve from "./components/serve/serve";
import Navbar from "./components/navbar/navbar";
import { useState } from "react";
import Menu from "./components/menu/menu";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <Menu />
      <Navbar />

      <div className="app-root body">
        <Hero loading={loading} />
      </div>

      <div className="body">
        <About />
        <Serve />
      </div>
    </>
  );
};

export default App;
