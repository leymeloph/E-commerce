import React from "react";
import headerImg from "./assets/Header2.jpeg";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import VideosPage from "./pages/VideosPage";
import ImagesPage from "./pages/ImagesPage";
import "./style.css";





function App() {
  return (
    <>
      {/* Navbar */}
     <header
  style={{
    backgroundImage: `linear-gradient(rgba(107,66,38,0.85), rgba(160,82,45,0.85)), url(${headerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  }}
>
  <div className="header-overlay">
    <div className="logo">WeavePreserve</div>

    
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/images">Images</a></li>
        <li><a href="/videos">Videos</a></li>
      </ul>
    </nav>
  </div>
</header>





      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/images" element={<ImagesPage />} />
      </Routes>
    </>
  );
}

export default App;
