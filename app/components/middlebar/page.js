import style from "./page.module.css";
import React from "react";

function middlebar() {
  return (
    <div>
      <div className={style.div1}>
        <hr className={style.hr} />
      </div>

      <div className={style.label}>
        <h6>2323 ITEM </h6>

        <h6 className={style.h6}>&lt; HIDE FILTER</h6>

        <select className={style.select}>
          <option value="RECOMEMDED">RECOMEMDED</option>
          <option value="NEWESTFIST">NEWEST FIST</option>
          <option value="POPULAR">POPULAR</option>
          <option value="PRICE:HIGH TO LOW">PRICE HIGH LOW</option>
          <option value="PRICE:LOW TO HIGH">PRICE:LOW TO HIGH</option>
        </select>
      </div>
      <div className={style.div2}>
        <hr />
      </div>
    </div>
  );
}
export default middlebar;
