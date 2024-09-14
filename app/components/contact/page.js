import React from "react";
import Navbar from "../navbar/page";
import "./contact.css";
import backimage from "@/public/background.jpg";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";


function Page() {
  return (
    <div>
      <Navbar />
      <div className="contact_container">
        <div className="cont_heading">
          <h1>Contact our team</h1>
        </div>
        <div className="contact_pra">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            accusantium quos, sapiente, animi repellendus qui ratione
            reprehenderit assumenda quibusdam dolorem fugiat voluptas omnis.
          </p>
        </div>
      </div>
      <div>
        <div className="form_container">
          <div className="input_form">
            <form action="" method="post">
              <div className="form_co">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <br />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <br />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <label htmlFor="Email">Email</label>
              <br />
              <input
                className="Email_input"
                type="text"
                id="Email"
                placeholder="Email"
              />
              <label htmlFor="">Phone Number</label>
              <input
                className="Email_input"
                type="number"
                id="Email"
                placeholder="Email"
              />
              <label htmlFor="Message">Message</label>
              <br />
              <textarea
                name="Message"
                id="Message"
                placeholder="Leave youre message.."
              />
            </form>
            <label htmlFor="">servises</label>
            <div className="servise">
              <div className="servises_checkbox">
                <label htmlFor="">
                  {" "}
                  <input type="checkbox" />
                  Web design
                </label>

                <label htmlFor="">
                  {" "}
                  <input type="checkbox" />
                  Ux design
                </label>

                <label htmlFor="">
                  {" "}
                  <input type="checkbox" />
                  User reacharch
                </label>
              </div>
              <div>
                <div className="servises_checkbox">
                  <label htmlFor="">
                    {" "}
                    <input type="checkbox" />
                    Contact creation
                  </label>

                  <label htmlFor="">
                    {" "}
                    <input type="checkbox" />
                    Statrgy & consulting
                  </label>

                  <label htmlFor="">
                    {" "}
                    <input type="checkbox" />
                    othar
                  </label>
                </div>
              </div>
            </div>
            <button className="send_button">send Messages</button>
          </div>
          <div className="chat_with">
             <h3 className="cht-h">Chat with us</h3>
              <div>
                <p>Lorem ipsum dolor sit amet dolor sit amet</p>
              </div>

              <div className="contact-us-socila">
              <p><IoChatbubbleEllipsesOutline /><u>start a live chat</u></p>
              <p><PiTelegramLogoBold /><u>shoot as small</u></p>
              <p> <FaXTwitter /><u>Message us on X</u></p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;
