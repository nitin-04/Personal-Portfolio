import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Projects from "./pages/portfolio/Projects";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import Cursor from "./components/Cursor";
import Experience from "./pages/experience/Experience";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Cursor />
      {isLoading ? (
        <div className="loader-container">
          <RingLoader color="#0f5792" loading={isLoading} size={150} />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
