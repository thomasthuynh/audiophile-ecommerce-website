import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import { SelectedPage } from "./types";
import { headphones, speakers, earphones } from "./assets/data";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

import ProductLayout from "./pages/ProductLayout";
import Models from "./components/Models";
import ProductInfo from "./components/ProductInfo";
import Cart from "./components/Cart";
import Overlay from "./components/Overlay";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [cartModal, setCartModal] = useState<boolean>(false);
  const { pathname } = useLocation();

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
    window.scrollTo(0, 0);

    if (cartModal) {
      setCartModal(false);
    }
  }, [pathname]);

  return (
    <div className="relative mx-auto">
      <CartProvider>
        <Nav
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isScrolled={isScrolled}
          cartModal={cartModal}
          setCartModal={setCartModal}
        />
        <div className="relative mx-auto w-5/6">
          {cartModal && <Cart setCartModal={setCartModal} />}
        </div>

        {cartModal && <Overlay />}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* HEADPHONES */}
          <Route element={<ProductLayout />}>
            <Route
              path="/headphones"
              element={
                <Models product={"headphones"} productData={headphones} />
              }
            />
            <Route
              path="/headphones/:slug"
              element={
                <ProductInfo
                  productData={headphones}
                  setCartModal={setCartModal}
                />
              }
            />
          </Route>

          {/* SPEAKERS */}
          <Route element={<ProductLayout />}>
            <Route
              path="/speakers"
              element={<Models product={"speakers"} productData={speakers} />}
            />
            <Route
              path="/speakers/:slug"
              element={
                <ProductInfo
                  productData={speakers}
                  setCartModal={setCartModal}
                />
              }
            />
          </Route>

          {/* EARPHONES */}
          <Route element={<ProductLayout />}>
            <Route
              path="/earphones"
              element={<Models product={"earphones"} productData={earphones} />}
            />
            <Route
              path="/earphones/:slug"
              element={
                <ProductInfo
                  productData={earphones}
                  setCartModal={setCartModal}
                />
              }
            />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
      <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
