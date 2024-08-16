"use client"
import { MdKeyboardArrowUp } from "react-icons/md";
import React, { useState } from "react";
import "./App.css";

 function Dropdow() {
  const [isOpen, setIsOpen] = React.useState({
    ideal_for: false,
    occasion: false,
  });
  const [selectedFilter, setSelectedFilter] = useState({
    ideal_for: [],
    occasion: [],
  });
  const handleClickExpand = (category) => {
    setIsOpen((pre) => ({
      ...pre,
      [category]: !pre[category],
    }));
  };
  const handleSelectItem = (event, category) => {
    let key = event.target.id;
    const filterIns = { ...selectedFilter };
    let selectedCatgoryItem = filterIns[category];
    if (selectedCatgoryItem.includes(key)) {
      selectedCatgoryItem = selectedCatgoryItem.filter((item) => item !== key);
    } else {
      selectedCatgoryItem.push(key);
    }
    setSelectedFilter((pre) => ({
      ...pre,
      [category]: selectedCatgoryItem,
    }));
  };
  const handleClickUnselect = (category) => {
    setSelectedFilter((pre) => ({ ...pre, [category]: [] }));
  };
  return (

    <div className="App">
      <div className="sidebar">
        <div className="filter_section">
          <div className="filter_section_head">
            <b className="m-0">IDEAL FOR</b>
            {isOpen.ideal_for ? (
              <i
                onClick={() => handleClickExpand("ideal_for")}
                className="ph ph-caret-up"
              ></i>
            ) : (
              <i
                onClick={() => handleClickExpand("ideal_for")}
                className="ph ph-caret-down"
              ></i>
            )}
          </div>
          <div className="filter_selected">
            <div className="filter_item">
              <input type="checkbox" id="f1" />
              <label htmlFor="f1">All</label>
            </div>

            <div hidden={!isOpen.ideal_for}>
              <p
                onClick={() => handleClickUnselect("ideal_for")}
                className="unselected"
              >
                Unselected
              </p>
              <div className="filter_item">
                <input
                  onChange={(e) => handleSelectItem(e, "ideal_for")}
                  type="checkbox"
                  checked={selectedFilter.ideal_for?.includes("men")}
                  id="men"
                />
                <label htmlFor="men">Men</label>
              </div>
              <div className="filter_item">
                <input
                  onChange={(e) => handleSelectItem(e, "ideal_for")}
                  type="checkbox"
                  checked={selectedFilter.ideal_for?.includes("women")}
                  id="women"
                />
                <label htmlFor="women">Women</label>
              </div>
              <div className="filter_item">
                <input
                  onChange={(e) => handleSelectItem(e, "ideal_for")}
                  type="checkbox"
                  checked={selectedFilter.ideal_for?.includes("boy_and_girl")}
                  id="boy_and_girl"
                />
                <label htmlFor="boy_and_girl">Boy & Girl</label>
              </div>
            </div>
          </div>
        </div>
        {/* side bar degin  */}
      </div>
        <div className="side-degin">
          <label>OCCASION  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>WORK<MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>FABRIC  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>SEGMENT  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>SUTAIBLE FOR  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>ROW METARIAL  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>PATTER  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>FEBRIK   <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>TWILL COTTERN  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>POBLIC COTTER  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>CANVAS  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>CHAMBRY  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>MOLIXN  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>OXFORD  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
        <div className="side-degin">
          <label>OCCASION  <MdKeyboardArrowUp  className="reacticon"/></label>
          <hr />
        </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Dropdow/>
      
    </div>
  )
}

