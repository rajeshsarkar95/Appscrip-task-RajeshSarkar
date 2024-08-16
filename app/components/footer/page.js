import React from "react";
import "./App.css";

function Page() {
  return (
    <div>
      <div className="grid-container">
        <div className="box">
          <div className="subscription-container">
            <h1>BE THE FIRST TO KNOW</h1>
            <p>Sign up for the latest updates</p>
            <input type="text" placeholder="Enter your email" />
            <button className="subcribbutton">SUBCRIPE</button>
          </div>
        </div>
        <div className="box"></div>
        <div className="box">
          <div className="contact-box">
            <h2>Contact Us</h2>
            <p>
              <strong>Phone:</strong> +91 95687 55984
            </p>
            <p>
              <strong>Email:</strong> prorajeshsarkar@gmail.com
            </p>
            <p>
              <strong>Currency:</strong> USD
            </p>{" "}
            {/* Adjust according to your requirement */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              molestiae!
            </p>
          </div>
        </div>

        <div className="box">
          <ul>
            <h5>META MOUSE</h5>
            <li>About us</li>
            <li>Storis</li>
            <li>Artissans</li>
            <li>Boundris</li>
            <li>Contact us</li>
            <li>EU Complianncs docs</li>
          </ul>
        </div>
        <div className="box">
          <ul>
            <h5>QUIEK LINKS</h5>
            <li>Order and sharing </li>
            <li>joing login/and seller</li>
            <li>payment and pricing</li>
            <li>Return refund</li>
            <li>F&Os</li>
            <li>Privacy Policy</li>
            <li>Term and condition</li>
          </ul>
        </div>
        <div className="box">
          <div>
            <h5>FOLLOW US</h5>
          <div class="social-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              class="icon instagram"
              title="Instagram"
            ></a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              class="icon linkedin"
              title="LinkedIn"
            ></a>
            </div>
            <h5>META muse ACCEPTS</h5>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
