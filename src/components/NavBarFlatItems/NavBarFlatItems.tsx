import React from "react";
import "./NavBarFlatItems.css";
import { Link } from "react-router-dom";
interface IProps {
  CreateSingle?: boolean;
}
const NavBarFlatItems: React.FC<IProps> = ({ CreateSingle }) => {
  return (
    <div className="navbar-flat">
      <div className="nav-resp-size">
        <div
          className={
            CreateSingle ? "header-holder CreateSingle" : "header-holder"
          }
        >
          <div className="left-logo-nav">
            <div>
              <Link to="/" className="transparent-logo">
                <img src="assets/images/opt-logo3.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="header-btns">
            <button className="btn-create">Create</button>
            <button className="btn-connect-wallet">Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarFlatItems;
