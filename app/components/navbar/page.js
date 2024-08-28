"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/Vector.png";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { BiAward } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="nav">
        <button className="menuButton" onClick={toggleMenu}>
          
          <GiHamburgerMenu size={30} />
        </button>
        <Image src={logo} width={36} height={36} className="Logo" alt="logo" />

        <label className="logoName">LOGO</label>
        <div className="icon">
          <i>
            <CiSearch />
          </i>
          <i>
            <CiHeart />
          </i>
          <i>
            <IoBagRemoveOutline />
          </i>
          <i className="hum_icom">
            <BiAward />
          </i>
          <label className="nav_option">
            <select className="nav_select">
              <option value="English">ENG</option>
              <option value="Hindi">Hindi</option>
              <option value="Bengali">Bengali</option>
            </select>
          </label>
        </div>
      </nav>
      <ul className={`subnav ${menuOpen ? "open" : ""}`}>
        <li className="li">SHOP</li>
        <li className="li">SKILL</li>
        <li className="li">STORIES</li>
        <li className="li">ABOUT</li>
        <li className="li">CONTACT </li>
      </ul>
      <hr className="hr" />
    </div>
  );
}

export default Navbar;
