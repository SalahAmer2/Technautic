import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const links: Array<any> = [
  { name: "Explore", to: "/" },
  { name: "My Profile", to: "/" },
  { name: "Telegram", to: "/" },
  { name: "Twitter", to: "/" },
  { name: "Medium", to: "/" },
  { name: "Mail", to: "/" },
];
const Footer: React.FC = () => {
  return (
    <div className="roadmap-outer">
      <div className="footer-resp-size">
        <div className="footer-roadmap">
          <div className="footer-left-detail">
            <img src="assets/images/opt-logo3.png" alt="" />
            <div className="input-group">
              <input
                type="email"
                className="footer-subscribe"
                placeholder="Enter your email"
              />
              <button className="footer-subscribe-btn" type="submit">
                Subscribe
              </button>
            </div>
          </div>
          <div className="footer-center-links">
            <h5>COMMUNITY</h5>
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <Link to={item.to}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          Copyright © 2021 Flatearth. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
