import { useState } from "react";
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
};

const Nav = ({ selectedPage, setSelectedPage, isScrolled }: Props) => {
  const [modalToggled, setModalToggled] = useState<boolean>(false);

  return (
    <nav className="fixed z-20 w-full bg-black font-manrope text-white">
      <div
        className={`${
          !isScrolled ? "border-b border-neutral-500" : ""
        } mx-auto w-5/6 border-neutral-500 py-6`}
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
            <img src={Logo} alt="Logo" className="hidden sm:block" />
          </div>

          <div className="sm:hidden">
            <img src={Logo} alt="Logo" />
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
          <div>
            <img src={Cart} alt="Cart" />
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
