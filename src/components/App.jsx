import About from "../pages/About";
import Home from "../pages/Home";
import Product from "../pages/Product";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus(pour error 404 par exemple) */}
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
