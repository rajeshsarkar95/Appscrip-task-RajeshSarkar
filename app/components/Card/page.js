/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useState, useEffect } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import "./card.css";

export default function Card(props) {
  const [products, setProducts] = useState([]);

  const  {ispen,setIspen} = props
  console.log(props)

  const toggleSidebar = () => {
    setIspen(!ispen);
  };
  const [isOpen, setIsOpen] = React.useState({
    ideal_for: false,
    work: false,
    today: false,
  });
  const [selectedFilter, setSelectedFilter] = useState({
    ideal_for: [],
    work: [],
    today: [],
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleClickExpand = (category) => {
    setIsOpen((pre) => ({
      ...pre,
      [category]: !pre[category],
    }));
  };

  const handleSelectItem = (event, category) => {
    let key = event.target.id;
    const filterIns = { ...selectedFilter };
    let selectedCategoryItem = filterIns[category];
    if (selectedCategoryItem.includes(key)) {
      selectedCategoryItem = selectedCategoryItem.filter(
        (item) => item !== key
      );
    } else {
      selectedCategoryItem.push(key);
    }
    setSelectedFilter((pre) => ({
      ...pre,
      [category]: selectedCategoryItem,
    }));
  };

  const handleClickUnselect = (category) => {
    setSelectedFilter((pre) => ({ ...pre, [category]: [] }));
  };

  return (
    <>
      <div className="container">
        <div className={`sidebar ${ispen ? "" : "hidden"}`} >

          <div className="App">
            <div className="Mainsidebar">
              {/* Ideal For Section */}
              <div className={`filter_section ${ispen ? "" : "hidden"}` 
                
              }
              >
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
                   
                    <label htmlFor="all_ideal_for">All</label>
                  </div>
                  <div hidden={!isOpen.ideal_for}>
                    <p
                      onClick={() => handleClickUnselect("ideal_for")}
                      className="unselected"
                    >
                      Unselect All
                    </p>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "ideal_for")}
                        type="checkbox"
                        checked={selectedFilter.ideal_for.includes("men")}
                        id="men"
                      />
                      <label htmlFor="men">Men</label>
                    </div>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "ideal_for")}
                        type="checkbox"
                        checked={selectedFilter.ideal_for.includes("women")}
                        id="women"
                      />
                      <label htmlFor="women">Women</label>
                    </div>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "ideal_for")}
                        type="checkbox"
                        checked={selectedFilter.ideal_for.includes(
                          "boy_and_girl"
                        )}
                        id="boy_and_girl"
                      />
                      <label htmlFor="boy_and_girl">Boy & Girl</label>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr_tag" />
              <div className="filter_section">
                <div className="filter_section_head">
                  <b className="m-0">OCCASION</b>
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
                    <label htmlFor="all_ideal_for">All</label>
                  </div>
                  <div hidden={!isOpen.ideal_for}>
                    <p
                      onClick={() => handleClickUnselect("ideal_for")}
                      className="unselected"
                    >
                      Unselect All
                    </p>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "ideal_for")}
                        type="checkbox"
                        checked={selectedFilter.ideal_for.includes("men")}
                        id="men"
                      />
                      <label htmlFor="men">Men</label>
                    </div>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "ideal_for")}
                        type="checkbox"
                        checked={selectedFilter.ideal_for.includes("women")}
                        id="women"
                      />
                      <label htmlFor="women">Women</label>
                    </div>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "ideal_for")}
                        type="checkbox"
                        checked={selectedFilter.ideal_for.includes(
                          "boy_and_girl"
                        )}
                        id="boy_and_girl"
                      />
                      <label htmlFor="boy_and_girl">Boy & Girl</label>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr_tag" />

              {/* Work Section */}
              <div className="filter_section">
                <div className="filter_section_head">
                  <b className="m-0">SUTABLE FOR</b>
                  {isOpen.work ? (
                    <i
                      onClick={() => handleClickExpand("work")}
                      className="ph ph-caret-up"
                    ></i>
                  ) : (
                    <i
                      onClick={() => handleClickExpand("work")}
                      className="ph ph-caret-down"
                    ></i>
                  )}
                </div>
                <div className="filter_selected">
                  <div className="filter_item">
                    <label htmlFor="all_work">All</label>
                  </div>
                  <div hidden={!isOpen.work}>
                    <p
                      onClick={() => handleClickUnselect("work")}
                      className="unselected"
                    >
                      Unselect All
                    </p>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "work")}
                        type="checkbox"
                        checked={selectedFilter.work.includes("office")}
                        id="office"
                      />
                      <label htmlFor="office">Office</label>
                    </div>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "work")}
                        type="checkbox"
                        checked={selectedFilter.work.includes("home")}
                        id="home"
                      />
                      <label htmlFor="home">Home</label>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr_tag" />
              <div className="filter_section">
                <div className="filter_section_head">
                  <b className="m-0">RAW METERIAL</b>
                  {isOpen.work ? (
                    <i
                      onClick={() => handleClickExpand("work")}
                      className="ph ph-caret-up"
                    ></i>
                  ) : (
                    <i
                      onClick={() => handleClickExpand("work")}
                      className="ph ph-caret-down"
                    ></i>
                  )}
                </div>
                <div className="filter_selected">
                  <div className="filter_item">
                    <label htmlFor="all_work">All</label>
                  </div>
                  <div hidden={!isOpen.work}>
                    <p
                      onClick={() => handleClickUnselect("work")}
                      className="unselected"
                    >
                      Unselect All
                    </p>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "work")}
                        type="checkbox"
                        checked={selectedFilter.work.includes("office")}
                        id="office"
                      />
                      <label htmlFor="office">Office</label>
                    </div>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "work")}
                        type="checkbox"
                        checked={selectedFilter.work.includes("home")}
                        id="home"
                      />
                      <label htmlFor="home">Home</label>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr_tag" />
              <div className="filter_section">
                <div className="filter_section_head">
                  <b className="m-0">WORK</b>
                  {isOpen.work ? (
                    <i
                      onClick={() => handleClickExpand("work")}
                      className="ph ph-caret-up"
                    ></i>
                  ) : (
                    <i
                      onClick={() => handleClickExpand("work")}
                      className="ph ph-caret-down"
                    ></i>
                  )}
                </div>
                <div className="filter_selected">
                  <div className="filter_item">
                    <label htmlFor="all_work">All</label>
                  </div>
                  <div hidden={!isOpen.work}>
                    <p
                      onClick={() => handleClickUnselect("work")}
                      className="unselected"
                    >
                      Unselect All
                    </p>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "work")}
                        type="checkbox"
                        checked={selectedFilter.work.includes("office")}
                        id="office"
                      />
                      <label htmlFor="office">Office</label>
                    </div>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "work")}
                        type="checkbox"
                        checked={selectedFilter.work.includes("home")}
                        id="home"
                      />
                      <label htmlFor="home">Home</label>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr_tag" />
              <div className="filter_section">
                <div className="filter_section_head">
                  <b className="m-0">FABRIC</b>
                  {isOpen.work ? (
                    <i
                      onClick={() => handleClickExpand("work")}
                      className="ph ph-caret-up"
                    ></i>
                  ) : (
                    <i
                      onClick={() => handleClickExpand("work")}
                      className="ph ph-caret-down"
                    ></i>
                  )}
                </div>
                <div className="filter_selected">
                  <div className="filter_item">
                    <label htmlFor="all_work">All</label>
                  </div>
                  <div hidden={!isOpen.work}>
                    <p
                      onClick={() => handleClickUnselect("work")}
                      className="unselected"
                    >
                      Unselect All
                    </p>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "work")}
                        type="checkbox"
                        checked={selectedFilter.work.includes("office")}
                        id="office"
                      />
                      <label htmlFor="office">Office</label>
                    </div>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "work")}
                        type="checkbox"
                        checked={selectedFilter.work.includes("home")}
                        id="home"
                      />
                      <label htmlFor="home">Home</label>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr_tag" />

              <div className="filter_section">
                <div className="filter_section_head">
                  <b className="m-0">SEGMENT</b>
                  {isOpen.work ? (
                    <i
                      onClick={() => handleClickExpand("work")}
                      className="ph ph-caret-up"
                    ></i>
                  ) : (
                    <i
                      onClick={() => handleClickExpand("work")}
                      className="ph ph-caret-down"
                    ></i>
                  )}
                </div>
                <div className="filter_selected">
                  <div className="filter_item">
                    <label htmlFor="all_work">All</label>
                  </div>
                  <div hidden={!isOpen.work}>
                    <p
                      onClick={() => handleClickUnselect("work")}
                      className="unselected"
                    >
                      Unselect All
                    </p>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "work")}
                        type="checkbox"
                        checked={selectedFilter.work.includes("office")}
                        id="office"
                      />
                      <label htmlFor="office">Office</label>
                    </div>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "work")}
                        type="checkbox"
                        checked={selectedFilter.work.includes("home")}
                        id="home"
                      />
                      <label htmlFor="home">Home</label>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr_tag" />

              {/* Today Section */}
              <div className="filter_section">
                <div className="filter_section_head">
                  <b className="m-0">TODAY</b>
                  {isOpen.today ? (
                    <i
                      onClick={() => handleClickExpand("today")}
                      className="ph ph-caret-up"
                    ></i>
                  ) : (
                    <i
                      onClick={() => handleClickExpand("today")}
                      className="ph ph-caret-down"
                    ></i>
                  )}
                </div>
                <div className="filter_selected">
                  <div className="filter_item">
                    <label htmlFor="all_today">All</label>
                  </div>
                  <div hidden={!isOpen.today}>
                    <p
                      onClick={() => handleClickUnselect("today")}
                      className="unselected"
                    >
                      Unselect All
                    </p>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "today")}
                        type="checkbox"
                        checked={selectedFilter.today.includes("morning")}
                        id="morning"
                      />
                      <label htmlFor="morning">Morning</label>
                    </div>
                    <div className="filter_item">
                      <input
                        onChange={(e) => handleSelectItem(e, "today")}
                        type="checkbox"
                        checked={selectedFilter.today.includes("evening")}
                        id="evening"
                      />
                      <label htmlFor="evening">Evening</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main_Content">
          {products.map((item) => (
            <div key={item.id} className="card">
              <img className="images" src={item.image} alt={item.title} />
              <h1 className="Product_Name">PRODUCT NAME </h1>
              
              <p className="sing_create">
              <u>Sign in</u> or Create an account to see pricing
              <i className="heart_ico"> <IoIosHeartEmpty /></i>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
