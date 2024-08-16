/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Styles from "./page.module.css";
import React from "react";
import logo from "@/public/logo.jpg";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { BiAward } from "react-icons/bi";

function Navbar() {
  return (
    <div>
      <nav className={Styles.nav}>
        <Image
          src={logo}
          width={70}
          height={70}
          className="hidden md:block"
          alt="logo"
        />
        <label className={Styles.logoName}>Logo</label>
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
              <option  value="English">ENG</option>
              <option  value="Hindi">Hindi</option>
              <option  value="Bengoli">Bengoli</option>
            </select>
          </label>
        </div>
      </nav>
      <ul className={Styles.subnav}>
        <li className={Styles.li}>SHOP</li>
        <li className={Styles.li}>SKILL</li>
        <li className={Styles.li}>STORIES</li>
        <li className={Styles.li}>ABOUT</li>
        <li className={Styles.li}>CONTACT US</li>
      </ul>
      <hr className={Styles.hr} />

      <h1 className={Styles.heading}>DISCOVER OUR PRODUCTRS</h1>
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
