/* eslint-disable @next/next/no-img-element */
"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState,useEffect } from "react";
import { CiHeart } from "react-icons/ci";


function Card() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await fetch("https://fakestoreapi.com/products");
        data = await data.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // The empty dependency array ensures this runs only once on mount
    
  return (
    <div>
    <div  className={styles.container}>
      <div>
          {products.map((item) => (
             <div key={item.id} className={styles.column}>
             <div className={styles.card}>
             <img className={styles.images}  src={item.image} alt={item.title}/>
             </div>
             <h5>{item.title}</h5>
             <p>sing in Create a acount for pricing <CiHeart /></p>
           </div>
             ))}
          </div>
          </div>
        </div>
          
  );
}

export default Card;
