import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

import { NavLinks } from "../types";

import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "../assets/shared/desktop/icon-cart.svg";
import Hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import { FaXmark } from "react-icons/fa6";

type Props = {
  isScrolled: boolean;
  cartModal: boolean;
  setCartModal: (value: boolean) => void;
};

const Nav = ({ isScrolled, cartModal, setCartModal }: Props) => {
  const [modalToggled, setModalToggled] = useState<boolean>(false);
  const {
    state: { cart },
  } = useContext(CartContext);

  const navLinks: NavLinks[] = [
    { name: "home", path: "/" },
    { name: "headphones", path: "/headphones" },
    { name: "speakers", path: "/speakers" },
    { name: "earphones", path: "/earphones" },
  ];

  const linkStyles =
    "font-bold uppercase tracking-[1px] hover:text-primary-500";

  const numberOfItems = cart.reduce(
    (items, currentItem) => items + (currentItem.quantity ?? 0),
    0,
  );

  const handleCart = () => {
    setCartModal(!cartModal);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed z-20 mx-auto w-full bg-black text-white">
      <div
        className={`${
          !isScrolled ? "border-b border-neutral-500" : ""
        } wrapper py-6`}
      >
        {/* MENU */}
        <div className="flex items-center justify-between">
          <div className="sm:flex sm:items-center">
            <button
              onClick={() => setModalToggled(!modalToggled)}
              className="sm:mr-12 md:hidden"
            >
              <img src={Hamburger} alt="Hamburger menu" className="h-[15px]" />
            </button>
            <Link to="/">
              <img src={Logo} alt="Logo" className="hidden sm:block" />
            </Link>
          </div>

          <div className="sm:hidden">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex">
            <ul className="flex space-x-8 text-sm lg:space-x-12">
              {navLinks.map((link, i) => (
                <Link key={i} to={link.path} className={linkStyles}>
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          <div className="relative">
            <button onClick={handleCart} className="hover:opacity-80">
              <img src={Cart} alt="Cart" />
              {cart.length > 0 && (
                <div className="absolute -bottom-[2px] -right-[10px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-primary-500">
                  <span className="text-xs">{numberOfItems}</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MODAL */}
        <div
          className={
            modalToggled
              ? "transition-left opacity-1 absolute left-0 top-0 h-screen w-full bg-black duration-300"
              : "transition-left absolute -left-[100%] top-0 h-screen w-full bg-black opacity-0 duration-300"
          }
        >
          <div className="relative flex h-full w-full items-center justify-center text-center">
            <button
              onClick={() => setModalToggled(false)}
              className="absolute left-3 top-6"
            >
              <FaXmark size={25} />
            </button>

            <ul className="flex h-1/3 flex-col justify-between text-lg">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  onClick={() => setModalToggled(!modalToggled)}
                  className={linkStyles}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
