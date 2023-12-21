import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import { SelectedPage } from "../types";

import PageLink from "./PageLink";

import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "../assets/shared/desktop/icon-cart.svg";
import Hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import { FaXmark } from "react-icons/fa6";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isScrolled: boolean;
  cartModal: boolean;
  setCartModal: (value: boolean) => void;
};

const Nav = ({
  selectedPage,
  setSelectedPage,
  isScrolled,
  cartModal,
  setCartModal,
}: Props) => {
  const [modalToggled, setModalToggled] = useState<boolean>(false);
  const {
    state: { cart },
  } = useContext(CartContext);

  const numberOfItems = cart.reduce(
    (items, currentItem) => items + (currentItem.quantity ?? 0),
    0,
  );

  return (
    <nav className="fixed z-20 mx-auto w-full max-w-[2560px] bg-black text-white">
      <div
        className={`${
          !isScrolled ? "border-b border-neutral-500" : ""
        } mx-auto w-5/6 py-6`}
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
            <ul className="flex space-x-4 text-sm min-[880px]:space-x-8 lg:space-x-12">
              <PageLink
                page="home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <PageLink
                page="headphones"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <PageLink
                page="speakers"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <PageLink
                page="earphones"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </ul>
          </div>

          <div className="relative">
            <button
              onClick={() => setCartModal(!cartModal)}
              className="hover:opacity-80"
            >
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
          <div className="relative mx-auto flex h-full w-5/6 items-center justify-center text-center">
            <button
              onClick={() => setModalToggled(false)}
              className="absolute -left-1 top-6"
            >
              <FaXmark size={25} />
            </button>

            <ul className="flex h-1/3 flex-col justify-between text-lg">
              <PageLink
                page="home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                modalToggled={modalToggled}
                setModalToggled={setModalToggled}
              />
              <PageLink
                page="headphones"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                modalToggled={modalToggled}
                setModalToggled={setModalToggled}
              />
              <PageLink
                page="speakers"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                modalToggled={modalToggled}
                setModalToggled={setModalToggled}
              />
              <PageLink
                page="earphones"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                modalToggled={modalToggled}
                setModalToggled={setModalToggled}
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
