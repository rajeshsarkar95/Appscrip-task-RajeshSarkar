"use client";

import React, { useState } from "react";
import Image from "next/image";
import Styles from "./page.module.css";
import logo from "@/public/logo.jpg";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { BiAward } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className={Styles.nav}>
        <Image
          src={logo}
          width={35}
          height={35}
          className="hidden md:block"
          alt="logo"
        />
        <label className={Styles.logoName}>LOGO</label>
        <div className={Styles.icon}>
          <h2>
            <CiSearch />
          </h2>
          <h2>
            <CiHeart />
          </h2>
          <h2>
            <IoBagRemoveOutline />
          </h2>
          <h2>
            <BiAward />
          </h2>
          <label className={Styles.option}>
            <select className={Styles.select}>
              <option value="English">ENG</option>
              <option value="Hindi">Hindi</option>
              <option value="Bengali">Bengali</option>
            </select>
          </label>
          <button className={Styles.menuButton} onClick={toggleMenu}>
            <GiHamburgerMenu size={30} />
          </button>
        </div>
      </nav>
      <ul className={`${Styles.subnav} ${menuOpen ? Styles.open : ""}`}>
        <li className={Styles.li}>SHOP</li>
        <li className={Styles.li}>SKILL</li>
        <li className={Styles.li}>STORIES</li>
        <li className={Styles.li}>ABOUT</li>
        <li className={Styles.li}>CONTACT US</li>
      </ul>
      <hr className={Styles.hr} />
      <h1 className={Styles.heading}>DISCOVER OUR PRODUCTS</h1>
      <div className={Styles.div}>
        <p className={Styles.pragraf}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse
          laborum veritatis numquam vel deserunt. Aut
        </p>
      </div>
    </div>
  );
}

export default Navbar;
