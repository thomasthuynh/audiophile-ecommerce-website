import { useEffect, useState, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CartContext from "./context/CartContext";

import { headphones, speakers, earphones } from "./assets/data";

import Home from "./pages/Home";
import ProductLayout from "./pages/ProductLayout";
import Checkout from "./pages/Checkout";

import Nav from "./components/Nav";
import Models from "./components/Models";
import ProductInfo from "./components/ProductInfo";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";
import Overlay from "./components/Overlay";

function App() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [cartModal, setCartModal] = useState<boolean>(false);
  const [orderModal, setOrderModal] = useState<boolean>(false);
  const { pathname } = useLocation();

  const { dispatch } = useContext(CartContext);

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

    if (orderModal) {
      setOrderModal(false);
      dispatch({ type: "CLEAR_CART" });
    }

    if (cartModal) {
      setCartModal(false);
    }
  }, [pathname]);

  return (
    <div className="relative">
      {cartModal && <Overlay />}
      {orderModal && <Overlay />}

      <Nav
        isScrolled={isScrolled}
        cartModal={cartModal}
        setCartModal={setCartModal}
      />
      <div className="wrapper relative">
        {cartModal && <Cart setCartModal={setCartModal} />}
        {orderModal && <OrderConfirmation />}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* HEADPHONES */}
        <Route element={<ProductLayout />}>
          <Route
            path="/headphones"
            element={<Models product={"headphones"} productData={headphones} />}
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
              <ProductInfo productData={speakers} setCartModal={setCartModal} />
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
        <Route
          path="/checkout"
          element={<Checkout setOrderModal={setOrderModal} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
