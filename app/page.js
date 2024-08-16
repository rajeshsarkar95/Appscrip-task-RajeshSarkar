/* eslint-disable jsx-a11y/alt-text */
import Middlebar from "./components/middlebar/page";
import Card from "./components/Card/page";
import Sidebar from "./components/sidebar/page"



export default function Home() {
  return (
    <>
      <div>
        <Middlebar />
      </div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Card />
      </div>
    </>
  );
}
