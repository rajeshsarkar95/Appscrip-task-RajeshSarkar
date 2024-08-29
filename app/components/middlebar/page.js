/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./middlebar.css";

function middlebar(props) {
  const  {ispen,setIspen} = props

    function toggle(){
      setIspen(!ispen);
      console.log("all ok")
    }
  return (
      <div className="containers">
        <h6 className="filter">3425 ITEM </h6>
        <div className="right">
        <h6  className="hide_Fiter" onClick={toggle}> <i className="back_icon">< IoIosArrowBack/></i>HIDE FILTER</h6>
        
        <div>
        <select className="mid_select">
          <option value="RECOMEMDED">RECOMEMDED</option>

          <option value="NEWESTFIST">NEWEST FIST</option>

          <option value="POPULAR">POPULAR</option>

          <option value="PRICE:HIGH TO LOW">PRICE HIGH LOW</option>
          
          <option value="PRICE:LOW TO HIGH">PRICE:LOW TO HIGH</option>
        </select>
        </div>
        </div>
      </div>
  );
}
export default middlebar;
