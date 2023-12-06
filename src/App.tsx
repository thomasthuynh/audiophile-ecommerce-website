import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SelectedPage } from "./types";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";


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
        <Route path="/home" element={<Home />} />
        <Route path="/headphones" element={<ProductListing />}/>
      </Routes>
      <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
