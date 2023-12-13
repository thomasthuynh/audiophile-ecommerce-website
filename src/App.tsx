import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SelectedPage } from "./types";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProductModels from "./components/ProductModels";

import { headphones, speakers, earphones } from "./assets/data";
import ProductInfo from "./components/ProductInfo";
import ProductLayout from "./pages/ProductLayout";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else if (window.scrollY === 0) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Nav
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isScrolled={isScrolled}
      />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* HEADPHONES */}
        <Route element={<ProductLayout />}>
          <Route
            path="/headphones"
            element={
              <ProductModels product={"headphones"} productData={headphones} />
            }
          />
          <Route
            path="/headphones/:slug"
            element={<ProductInfo productData={headphones} />}
          />
        </Route>

      </Routes>
      <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
