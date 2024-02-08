import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Cars from "./pages/Cars";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
