import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

// Core Components
import NotFoundPage from "./Core/NotFoundPage";

// Components
import Home from "./pages/Home";
import Product from "./components/Product";
import { useEffect } from "react";
import Navbar from "./Core/Navbar";
import Products from "./components/Products";


import 'lightbox.js-react/dist/index.css'
import { initLightboxJS } from 'lightbox.js-react'
import Compare from "./pages/Compare";
import { TailwindIndicator } from "./providers/tailwind-indicator";
import Layout from "./pages/Category/Layout";
import ProductsCategory from "./pages/Products/ProductsCategory";
import PageTest from "./pages/PageTest";

const Routing = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/*" element={<Layout />} />

      <Route
        path="/categories/products"
        element={<ProductsCategory />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/test"
        element={<PageTest />}
      />

      <Route
        path="/product/:id"
        element={<Product />}
      />

      <Route
        path="/product/:id/compare"
        element={<Compare />}
      />

      <Route path="/notFound" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />


    </Routes>
  );
};


function App() {

  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");

    AOS.init({ once: true, easing: "ease-in-sine", delay: 50 });
    AOS.refresh();

  }, []);

  return (
    <>
      <Navbar />

      <Routing />
      <TailwindIndicator />
    </>
  );
}
export default App;