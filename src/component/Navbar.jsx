import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "./../style.js";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import 'font-awesome/css/font-awesome.min.css';
const Navbar = () => {
  const [actice, setActice] = useState("");
  const [toggle, setToogle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary opacity-80`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActice("");
            window.scroll(0, 0);
          }}
        >
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            className="w-14 h-14 rounded-[50%] object-top"
          ></img>
          <p className="text-white text-[18px] font-bold cursor-pointer ">
            Prashant
            <span className="sm:block hidden"> | Computer Engineering</span>
          </p>
        </Link>

        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Links) => {
            return (
              <li
                key={Links.id}
                className={`${
                  actice === Links.title ? "text-[#915eff]" : "text-white"
                } hover:text-[#915eff] text-[18px] font-medium cursor-pointer`}
                onClick={() => setActice(Links.title)}
              >
                <a href={`#${Links.id}`}>{Links.title}</a>
              </li>
             
            );
          })}
          <li>
         
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={!toggle ? menu : close}
            alt="menu"
            loading="lazy"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToogle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-0 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className=" list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Links) => {
                return (
                  <li
                    key={Links.id}
                    className={`${
                      actice === Links.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActice(Links.title);
                      setToogle(!toggle);
                    }}
                  >
                    {Links.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
