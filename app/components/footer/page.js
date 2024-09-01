import React from "react";
import "./footer.css";
import Image from "next/image";
import Payimages from "@/public/image.png"
import instagram from "@/public/instagram.jpg"
import Linkedin  from  "@/public/Linkedin.png"
import Langubage from "@/public/Language.png"

function Page() {
  return (
    <div>
      <div className="footer">
        <div className="first_div">
          <h4>BE THE FIRST KNOW</h4>
          <p className="first_p">Lorem ipsum dolor sit sit consectetur </p>
          <input className="first_input" type="text" placeholder="Enter your email" />
          <div>

          <button className="Sub_button">SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact-us">
          <h4>CONTACT US</h4>
          <ul className="contact_ul">
            <li>+919568755984</li>
            <li>prorajeshsarkar@gmail.com</li>
          </ul>
          <h4>CURRENCY</h4>
          <Image src={Langubage} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur ad</p>
        </div>
      </div>
      <div className="lower_footer">
        <div className="meta_mause">
          <h4>META MAUSE</h4>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="quick_link">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="follow_us">
          <h4>FOLLOW US</h4>
          <Image className="instagram" src={instagram} alt="instagram" width={30} height={30}  />
          <Image className="linkedin" src={Linkedin} alt="Linkedin" width={30} height={30} />
          <h5>Meta Muse Accepted</h5>
          <Image src={Payimages} alt="gpay" width={300} />
        </div>
      </div>
    </div>
  );
}
export default Page;
