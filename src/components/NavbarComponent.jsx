import React from "react";
import styles from "../app/styles.module.css";

const NavbarComponent = () => {
  return (
    <header className="w-[95%] m-auto pt-5 pb-10">
      <div className="w-full flex flex-wrap items-center">
        <div className="flex-1 flex justify-between items-center">
          <a href="#" className="text-xl text-white">
            <img
              src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png"
              alt=""
            />
          </a>
        </div>

        <label for="menu-toggle" className="pointer-cursor md:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="flex items-center justify-between text-base text-white gap-5">
              <li className="hover:bg-white hover:text-black rounded-md">
                <a className="py-1 px-4 block" href="#">
                  Home
                </a>
              </li>
              <li className="hover:bg-white hover:text-black rounded-md">
                <a className="py-1 px-4 block" href="#">
                  Populoar
                </a>
              </li >
              <li className="hover:bg-white hover:text-black rounded-md">
                <a className="py-1 px-4 block" href="#">
                  Romance
                </a>
              </li>
              <li className="hover:bg-white hover:text-black rounded-md">
                <a className="py-1 px-4 block md:mb-0 mb-2" href="#">
                  Anime
                </a>
              </li>
              <li>
                <div class="relative text-black">
                  <input
                    type="text"
                    class="h-10 w-50 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                    placeholder="Type to search..."/>

                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
