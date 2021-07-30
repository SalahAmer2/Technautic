import BurgerIcon from "../components/BurgerIcon.component";
import "../components/main.css";

function Profile() {
  function myFunction() {
    console.log("profile func");
  }
  return (
    <div className="profilePage">
      <div className="outer">
        <div className="header-holder">
          <BurgerIcon />
          <div className="custom-container">
            <div className="navigation-holder">
              <div className="logo">
                <a href="markeet.html" className="transparent-logo">
                  <img src="./assets/images/opt-logo3.png" alt="" />
                </a>
                <a href="markeet.html" className="white-logo">
                  <img src="./assets/images/opt-logo3.png" alt="" />
                </a>
              </div>
              <div className="navigation">
                <div className="navigation-holder">
                  <ul className="mobile-nav">
                    <div className="logo-mobile">
                      <a href="markeet.html" className="white-logo">
                        <img
                          src="./assets/images/profile-icon-img.png"
                          alt=""
                        />
                      </a>
                      <p>owner</p>
                      <span>address goes here</span>
                    </div>
                    <li>
                      <a href="#">Address</a>
                    </li>
                    <li>
                      <a href="profile-page.html">My Profile</a>
                    </li>
                    <li>
                      <a href="#" className="#">
                        Explore
                      </a>
                    </li>
                    <li>
                      <a href="#" className="#">
                        Activity
                      </a>
                    </li>
                    <li>
                      <a href="#" className="#">
                        Flat Token
                      </a>
                    </li>
                    <li>
                      <a href="#" className="#">
                        Top Flatters
                      </a>
                    </li>
                    <li>
                      <a href="#" className="#">
                        Subscribe
                      </a>
                    </li>
                    <li>
                      <a href="markeet.html" className="#">
                        Connect Wallet
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome-markeet-opner clearfix" id="home">
          <div className="chain-container">
            <div className="markeet-profile-header"></div>
            <div className="profile-header">
              <a href="#">Upload cover photo</a>
              <a href="#">Edit Profile</a>
            </div>
          </div>
          <div className="chain-container">
            <div className="row">
              <div className="col-md-3">
                <div className="profile-outer-holder">
                  <img src="assets/images/profile-icon-img.png" alt="" />
                  <h3>
                    Gary Cartlidge
                    <a href="#">
                      <img src="assets/images/heart-icon.jpg" alt="" />
                    </a>
                  </h3>
                  <span>
                    0xb89c2f6bb674b...5b15{" "}
                    <a href="#">
                      <img src="assets/images/copy.png" alt="" />{" "}
                    </a>{" "}
                  </span>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <div className="website-linke">
                    <a href="#">www.abcdef.com</a>
                  </div>
                  <button className="btn btn-blue">Follow</button>
                  <div className="profile-social-icons">
                    <ul className="profile-icons">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter-square"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>Member since 16 March 2021</span>
                </div>
              </div>
              <div className="col-md-9">
                <div className="tab_container">
                  <input
                    id="tab1"
                    type="radio"
                    name="tabs"
                    defaultChecked={true}
                  />
                  <label>
                    <span>On Sale</span>
                  </label>

                  <input id="tab2" type="radio" name="tabs" />
                  <label>
                    <i className="fa fa-pencil-square-o"></i>
                    <span>Collections</span>
                  </label>

                  <input id="tab3" type="radio" name="tabs" />
                  <label>
                    <i className="fa fa-pencil-square-o"></i>
                    <span>Creations</span>
                  </label>

                  <input id="tab4" type="radio" name="tabs" />
                  <label>
                    <i className="fa fa-pencil-square-o"></i>
                    <span>Likes</span>
                  </label>
                  <section id="content1" className="tab-content">
                    <div className="row">
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>
                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="content2" className="tab-content">
                    <div className="row">
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 nopadding">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>
                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="item-card">
                          <ul className="artists">
                            <li>
                              <img src="assets/images/artist-icon.jpg" alt="" />
                            </li>
                          </ul>
                          <div className="owner-detial-outer">
                            <p>owner</p>

                            <span>
                              oxbak...dithel{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />{" "}
                              </a>{" "}
                            </span>
                          </div>

                          <div className="opening-dots">
                            <img
                              src="assets/images/opening-dots.jpg"
                              alt=""
                              onClick={myFunction}
                            />
                            <div className="reportbtn">
                              <div className="nav-icons-outr">
                                <ul>
                                  <li>
                                    <a href="#">Change Price</a>
                                  </li>
                                  <li>
                                    <a href="#">Remove From Sale</a>
                                  </li>
                                  <li>
                                    <a href="#">Transfer</a>
                                  </li>
                                  <li>
                                    <a href="#">Delete Permanently</a>
                                  </li>
                                  <li>
                                    <a href="#">Share</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="image-holder">
                            <a href="#">
                              <img
                                src="assets/images/trust-img.png"
                                alt="gallery-img"
                              />
                            </a>
                          </div>
                          <div className="details-row">
                            <div className="row">
                              <div className="col-7">
                                <h2>
                                  <a href="#">Ring offff trust</a>
                                </h2>
                              </div>
                              <div className="col-5">
                                <div className="trust-price">
                                  <span>6 of 10</span>
                                </div>
                              </div>
                            </div>

                            <div className="counter">
                              <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
                            </div>
                            <div className="counter">
                              <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
                            </div>
                            <div className="bid-row">
                              <a href="#">Placed a bid</a>
                              <a href="#" className="buy-now-btn">
                                Buy Now
                              </a>
                            </div>
                          </div>
                          <div className="like-icon">
                            <a href="#">
                              <img src="assets/images/heart-icon.jpg" alt="" />
                            </a>
                          </div>
                          <div className="heart-icon">
                            <a href="#">
                              <img src="assets/images/heart-icoen.jpg" alt="" />
                            </a>
                          </div>
                          <div className="item-id">
                            <p>12348</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="c-mask-right" className="c-mask"></div>
      </div>
    </div>
  );
}

export default Profile;
