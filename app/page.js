"use client";

import Middlebar from "./components/middlebar/page";
import Card from "./components/Card/page";
import Footer from "./components/footer/page";
import Middle from "./components/middle/page";
import { useState } from "react";
import Navbar from "./components/navbar/page";

export default function Home() {
  const [ispen, setIspen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Middle />
      <Middlebar ispen={ispen} setIspen={setIspen} />
      <Card
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        ispen={ispen}
        setIspen={setIspen}
      />
      <Footer />
    </>
  );
}
