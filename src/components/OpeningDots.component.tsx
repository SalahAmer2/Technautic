import React from 'react'

const OpeningDots = (page) => {
    function myProfileFunction() {
        console.log("profile func");
    }
    function myMarketFunction(){
        console.log("market func")
    }
    return (
        <div className="opening-dots">
            <img src="assets/images/opening-dots.jpg" alt="" onClick={ (page === "Profile") ? myProfileFunction : myMarketFunction }/>
            <div className="reportbtn">
                <div className="nav-icons-outr">
                    <ul>
                        <li>
                            <a href="#"> (Page === "Profile") ? Change Price : Buy Now</a>
                        </li>
                        <li>
                            <a href="#"> (Page === "Profile") ? Remove From Sale : Place a bid</a>
                        </li>
                        <li>
                            <a href="#"> (Page === "Profile") ? Transfer : Show Artist</a>
                        </li>
                        <li>
                            <a href="#"> (Page === "Profile") ? Delete Permanently : View info</a>
                        </li>
                        <li>
                            <a href="#"> (Page === "Profile") ? Share : Share artist</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OpeningDots
