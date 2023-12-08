import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SelectedPage } from "./types";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductModels from "./pages/ProductModels";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

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

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "");
    setSelectedPage(currentPath as SelectedPage);
    if (currentPath === "") {
      setSelectedPage(SelectedPage.Home);
    } else {
      setSelectedPage(currentPath as SelectedPage);
    }
  }, [location]);

  // console.log(selectedPage);

  return (
    <div>
      <Nav
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isScrolled={isScrolled}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/${selectedPage}`}
          element={<ProductModels selectedPage={selectedPage} />}
        />
      </Routes>
      <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
