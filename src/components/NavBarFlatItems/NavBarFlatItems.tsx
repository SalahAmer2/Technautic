import React from "react";
import "./NavBarFlatItems.css";

const NavBarFlatItems: React.FC = () => {
  return (
    <div className="navbar-flat">
      <div className="header-holder">
        <div className="chain-container">
          <div className="logo">
            <a href="index.html" className="transparent-logo">
              <img src="assets/images/opt-logo3.png" alt="" />
            </a>
            {/* <a href="index.html" className="white-logo">
              <img src="assets/images/opt-logo3.png" alt="" />
            </a> */}
          </div>
        </div>
        <div className="header-btns">
          <button className="btn-create">Create</button>
          <button className="btn-connect-wallet">Connect Wallet</button>
        </div>
      </div>{" "}
    </div>
  );
};

export default NavBarFlatItems;
