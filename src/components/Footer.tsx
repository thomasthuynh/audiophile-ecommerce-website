import Logo from "../assets/shared/desktop/logo.svg";
import { SelectedPage } from "../types";
import PageLink from "./PageLink";

import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="relative bg-black text-white mt-16">
      <div className="relative mx-auto h-full w-5/6 pb-8 pt-12 xl:pb-12 xl:pt-20">
        <div className="bg-primary-500 absolute left-1/2 top-0 h-1 w-[90px] -translate-x-1/2 md:left-0 md:translate-x-0"></div>

        {/* LOGO AND LINKS */}
        <div className="flex flex-col items-center justify-between text-center md:items-start md:text-start xl:flex-row">
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="flex items-center fill-slate-500"
            />
          </div>

          <ul className="flex flex-col space-y-6 py-12 text-sm md:flex-row md:space-x-6 md:space-y-0 xl:pt-0">
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

        {/* DESCRIPTION AND ICONS */}
        <div className="flex items-end xl:justify-between">
          <p className="text-center text-sm text-neutral-400 md:text-start xl:w-1/2 xl:text-base">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>

          <div className="hidden items-center space-x-4 xl:flex">
            <a href="https://www.facebook.com/" className="hover:opacity-80">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com/" className="hover:opacity-80">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/" className="hover:opacity-80">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>

        {/* COPYRIGHT AND ICONS */}
        <div className="flex flex-col items-center justify-between md:flex-row md:pt-20">
          <p className="py-12 text-sm font-bold text-neutral-400 md:py-0 xl:text-base">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex items-center space-x-4 xl:hidden">
            <a href="https://www.facebook.com/" className="hover:opacity-80">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com/" className="hover:opacity-80">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/" className="hover:opacity-80">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
