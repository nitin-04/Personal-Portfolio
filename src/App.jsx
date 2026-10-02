import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import "./App.css";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Projects = lazy(() => import("./pages/portfolio/Projects"));
const Experience = lazy(() => import("./pages/experience/Experience"));
const Contact = lazy(() => import("./pages/contact/Contact"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
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
          <Suspense
            fallback={
              <div className="loader-container">
                <RingLoader color="#0f5792" loading={true} size={120} />
              </div>
            }
          >
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="portfolio" element={<Projects />} />
              <Route path="experience" element={<Experience />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
