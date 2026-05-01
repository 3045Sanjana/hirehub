import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import MyApplication from "./pages/myApplication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
        <Route path="/applications" element={<MyApplication />} />
    </Routes>
  );
}

export default App;