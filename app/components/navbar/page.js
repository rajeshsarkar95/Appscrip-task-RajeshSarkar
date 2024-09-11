"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/Vector.png";
import { CiSearch } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { BiAward } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";
import "./navbar.css";

function Navbar(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { searchTerm, setSearchTerm } = props;

  const [clickvisible, setClickvisible] = useState(false);
  const handlevisibleClick = () => {
    setClickvisible(true);
  };
  const handlenotvisible = () => {
    setClickvisible(false);
  };
  const handleinput = () => {
    setIsEditing(true);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div className="nav">
        <button className="menuButton" onClick={toggleMenu}>
          <i className="ciMEnuBurge">
            <CiMenuBurger style={{ height: "25px", width: "25px" }} />
          </i>
        </button>
        <div className="Logo">
          <Image
            className="LogoIamge"
            src={logo}
            width={36}
            height={36}
            alt="logo"
          />
        </div>
        <div className="logoName">
          <label >LOGO</label>
        </div>
        <div className="icon">
          <i className="navbar_input_box">
            {isEditing ? (
              <input
                className="nav_isinput"
                type="text"
                placeholder="Search "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            ) : (
              <span>
                <CiSearch onClick={handleinput} />
              </span>
            )}
          </i>
          {clickvisible ? (
            <i onClick={handlenotvisible}>
              <CiHeart />
            </i>
          ) : (
            <i onClick={handlevisibleClick}>
              <IoHeart />
            </i>
          )}

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
      </div>
      <div>
        <ul className={`subnav ${menuOpen ? "open" : ""}`}>
          <li className="li">SHOP</li>
          <li className="li">SKILL</li>
          <li className="li">STORIES</li>
          <li className="li">ABOUT</li>
          <li className="li">CONTACT </li>
        </ul>
      </div>
      <hr className="hr" />
      <div className="home_shop">
        <p className="ico_home">HOME</p>
        <i className="home_ico">|</i>
        <p className="dic_shop">SHOP</p>
      </div>
    </div>
  );
}
export default Navbar;
