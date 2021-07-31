import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.styles.css'

const NavBar = () => {
    return (
        <div className="navigation-holder">

            <ul className="mobile-nav">
                <div className="logo-mobile">
                    
                    <span className="mobile-nav-to-link-style">
                        <Link to="/profile" className="white-logo"><img src="assets/images/profile-icon-img.png" alt=""/></Link>
                    </span>
                    <p>owner</p>
                    <span>address goes here</span>
                </div>
                <li><Link to="#">Address</Link></li>
                <li><Link to="/profile">My Profile</Link></li>
                <li><Link to="#" className="#">Explore</Link></li>
                <li><Link to="#" className="#">Activity</Link></li>
                <li><Link to="#" className="#">Flat Token</Link></li>
                <li><Link to="#" className="#">Top Flatters</Link></li>
                <li><Link to="#" className="#">Subscribe</Link></li>
                <li><Link to="#" className="#">Connect Wallet</Link></li>
            </ul>

        </div>
    )
}

export default NavBar
