import Middlebar from "./components/middlebar/page";
import Card from "./components/Card/page";
import Footer from "./components/footer/page";
import Middle from "./components/middle/page"

export default function Home() {
  return (
    <>
      <Middle/>
      <Middlebar />
      <Card />
      <Footer />
    </>
  );
}
