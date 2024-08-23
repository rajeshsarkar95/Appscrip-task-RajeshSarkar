
import React from "react";
import "./middlebar.css";

function middlebar() {
  return (
      <div className="label">
        <h6 className="filter">2323 ITEM </h6>
        <div className="right">
        <h6 className="h6">&lt; HIDE FILTER</h6>
        
        <select className="select">

          <option value="RECOMEMDED">RECOMEMDED</option>

          <option value="NEWESTFIST">NEWEST FIST</option>

          <option value="POPULAR">POPULAR</option>

          <option value="PRICE:HIGH TO LOW">PRICE HIGH LOW</option>
          
          <option value="PRICE:LOW TO HIGH">PRICE:LOW TO HIGH</option>
        </select>
        </div>
      </div>
  );
}
export default middlebar;
