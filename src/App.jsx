import { Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import { useEffect } from "react";
import Lenis from "lenis";
import SingleCourse from "./pages/SingleCourse";

function App() {
useEffect(() => {
    const lenis = new Lenis();
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    },[])

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="singleCourse/:name" element={<SingleCourse />} />
    </Routes>
  )
}

export default App
