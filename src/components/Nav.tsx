import { useState } from "react";
import { SelectedPage } from "../types";
import PageLink from "./PageLink";

import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "../assets/shared/desktop/icon-cart.svg";
import Hamburger from "../assets/shared/tablet/icon-hamburger.svg";

type Props = {};

const Nav = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  return (
    <nav className="bg-black text-white">
      <div className="border-b-gray-20 mx-auto w-5/6 border-b py-6">
        {/* DESKTOP MENU */}
        <div className="flex justify-between items-center">
          <div className="sm:flex sm:items-center">
            <img src={Hamburger} alt="Hamburger menu" className="sm:mr-12 h-[15px] lg:hidden"/>
            <img src={Logo} alt="Logo" className="hidden sm:block"/>
          </div>

          <div className="sm:hidden">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="hidden lg:flex">
            <ul className="flex">
              <PageLink page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <PageLink page="Headphones" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <PageLink page="Speakers" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <PageLink page="Earphones" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </ul>
          </div>
          <div>
            <img src={Cart} alt="Cart" />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
