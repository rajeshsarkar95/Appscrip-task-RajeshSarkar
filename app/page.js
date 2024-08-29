"use client"

import Middlebar from "./components/middlebar/page";
import Card from "./components/Card/page";
import Footer from "./components/footer/page";
import Middle from "./components/middle/page"
import { useState } from "react";

export default function Home(){
  const [ispen,setIspen] = useState(true);

  console.log(ispen);

  return (
    <>
      <Middle/>
      <Middlebar  ispen={ispen} setIspen={setIspen} />
      <Card  ispen={ispen} setIspen={setIspen} />
      <Footer />
    </>
  );
}
