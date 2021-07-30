
//import './dash-css/all.css';

function Market() {
    function myFunction(){
        console.log("my func")
    }
    return (
        
        <div className="marketPage">
      
      <div className="outer">
        <div className="header-holder">
            <div className="menu-btn">
                <div className="navi-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="custom-container">

                <div className="navigation-holder">
                    <div className="logo">
                        <a href="markeet.html" className="transparent-logo"><img src="assets/images/opt-logo3.png" alt=""/></a>
                        <a href="markeet.html" className="white-logo"><img src="assets/images/opt-logo3.png" alt=""/></a>
                    </div>
                    <div className="navigation">
                        <div className="navigation-holder">

                            <ul className="mobile-nav">
                                <div className="logo-mobile">
                                    
                                    <a href="markeet.html" className="white-logo"><img src="assets/images/profile-icon-img.png" alt=""/></a>
                                    <p>owner</p>
                                    <span>address goes here</span>
                                </div>
                                <li><a href="#">Address</a></li>
                                <li><a href="profile-page.html">My Profile</a></li>
                                <li><a href="#" className="#">Explore</a></li>
                                <li><a href="#" className="#">Activity</a></li>
                                <li><a href="#" className="#">Flat Token</a></li>
                                <li><a href="#" className="#">Top Flatters</a></li>
                                <li><a href="#" className="#">Subscribe</a></li>
                                <li><a href="markeet.html" className="#">Connect Wallet</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="welcome-markeet-opner clearfix" id="home">
            <div className="chain-container">
                <div className="markeet-header">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group has-search">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" className="form-control text-center" placeholder="What are you looking for ? "/>

                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
            <div className="chain-container">
                <div className="row">

                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                    

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="detail-page.html"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                   

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="detail-page.html"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                  

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="detail-page.html"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                   

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="detail-page.html"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                    

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="detail-page.html"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                    

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="detail-page.html"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                    

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="detail-page.html"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                   

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="detail-page.html"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                   

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="detail-page.html"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                    

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="detail-page.html"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                    

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="detail-page.html"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                    

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="#"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                    

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="#"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                    

                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="#"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>

                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>


                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="image-holder">
                                <a href="#"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 nopadding">
                        <div className="item-card">
                            <ul className="artists">
                                <li><img src="assets/images/artist-icon.jpg" alt=""/></li>
                            </ul>
                            <div className="owner-detial-outer">
                                <p>owner</p>

                                <span>oxbak...dithel <a href="#"><img src="assets/images/copy.png" alt=""/> </a> </span>
                            </div>
                            <div className="opening-dots">
                                <img src="assets/images/opening-dots.jpg" alt="" onClick={myFunction}/>
                                <div className="reportbtn">
                                    <div className="nav-icons-outr">
                                        <ul>
                                            <li>
                                                <a href="#">Buy Now</a>
                                            </li>
                                            <li>
                                                <a href="#">Place a bid</a>
                                            </li>
                                            <li>
                                                <a href="#">Show Artist</a>
                                            </li>
                                            <li>
                                                <a href="#">View info</a>
                                            </li>
                                            <li>
                                                <a href="#">Share artist</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="image-holder">
                                <a href="#"><img src="assets/images/trust-img.png" alt="gallery-img"/></a>
                            </div>
                            <div className="details-row">
                                <div className="row">
                                    <div className="col-6">
                                        <h2><a href="#">Ring offff trust</a></h2>
                                    </div>
                                    <div className="col-6">
                                        <div className="trust-price">
                                            <span>6 of 10</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="counter"><span>Price: 4 BNB</span> (Lowest price: 3 BNB)</div>
                                <div className="counter"><span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)</div>
                                <div className="bid-row">
                                    <a href="#">Placed a bid</a>
                                    <a href="#" className="buy-now-btn">Buy Now</a>
                                </div>
                            </div>
                            <div className="like-icon">
                                <a href="#"><img src="assets/images/heart-icon.jpg" alt=""/></a>
                            </div>
                            <div className="heart-icon">
                                <a href="#"><img src="assets/images/heart-icoen.jpg" alt=""/></a>
                            </div>
                            <div className="item-id">
                                <p>12348</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="c-mask-right" className="c-mask"></div>
    </div>
        </div>
    )

    
}

export default Market;