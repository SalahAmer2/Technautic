

function createitem() {
    return (
        <div className="createItemPage">

            <div className="header-holder">
                <div className="menu-btn">
                    <div className="navi-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="chain-container">
                    <div className="logo">
                        <a href="index.html" className="transparent-logo"><img src="assets/images/opt-logo3.png" alt="" /></a>
                        <a href="index.html" className="white-logo"><img src="assets/images/opt-logo3.png" alt="" /></a>
                    </div>
                    <div className="navigation-holder">
                        <ul className="mobile-nav">
                            <div className="logo-mobile">

                                <a href="index.html" className="white-logo"><img src="assets/images/profile-icon-img.png" alt="" /></a>
                                <p>owner</p>
                                <span>address goes here</span>
                            </div>
                            <li><a href="#">Address</a></li>
                            <li><a href="#">My Profile</a></li>
                            <li><a href="#" className="#">Explore</a></li>
                            <li><a href="#" className="#">Activity</a></li>
                            <li><a href="#" className="#">Flat Token</a></li>
                            <li><a href="#" className="#">Top Flatters</a></li>
                            <li><a href="#" className="#">Subscribe</a></li>
                            <li><a href="markeet.html" className="#">Connect Wallet</a></li>
                        </ul>
                        <ul className="navigation">


                            <li><a href="create-single.html">Create</a></li>
                            <li><a href="markeet.html" className="#">Connnect Wallet</a></li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className="top-create-header">
                <div className="chain-container">
                    <div className="row">
                        <div className="col-md-6">
                            <a href="index.html" className="back-to-home-btn">Back to Home</a>
                        </div>
                        <div className="col-md-6 text-right">
                            <div className="create-items-links">
                                <a href="#">Home</a>
                                <a href="#"> Create Item </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="create-item-outer">
                <div className="chain-container clearfix">
                    <div className="create-item-header">
                        <h2>Create Item</h2>
                        <p>Choose “Single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one collectible multiple times.</p>
                    </div>
                    <div className="create-item-inner-outer">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="create-item-left">
                                    <img src="assets/images/create-item-img.jpg" alt="" />
                                    <div className="create-items-action">
                                        <a href="create-single.html" className="create-single-btn"> Create Single</a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <div className="create-item-left">
                                    <img src="assets/images/create-item-img.jpg" alt="" />
                                    <div className="create-items-action">
                                        <a href="#" className="create-single-btn"> Create Multiple</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div id="roadmap-outer">
                <div className="chain-container clearfix">
                    <div className="row" id="roadmap">

                        <div className="col-md-6">
                            <div className="footer-left-outer" data-aos="fade-up" data-aos-duration="1400">
                                <div className="footer-left-detail">
                                    <img src="assets/images/opt-logo3.png" alt="" />

                                    <section className="home-newsletter">

                                        <div className="input-group">
                                            <input type="email" className="form-control form-footer" placeholder="Enter your email" />
                                            <span className="">
                                                <button className="input-group-btn" type="submit">Subscribe</button>
                                            </span>
                                        </div>

                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-center-links" data-aos="fade-up" data-aos-duration="1400">
                                <h5>COMMUNITY</h5>
                                <ul>
                                    <li>
                                        <a href="#">Explore</a>
                                    </li>
                                    <li>
                                        <a href="#">My Profile</a>
                                    </li>
                                    <li>
                                        <a href="#">Telegram</a>
                                    </li>
                                    <li>
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#">Medium</a>
                                    </li>
                                    <li>
                                        <a href="#">Mail</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4" id="contact">

                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="chain-container clearfix">

                    <p>Copyright © 2021 Flatearth. All rights reserved.</p>
                </div>
            </div>


            <div id="c-mask-right" className="c-mask"></div>

        </div>
    )


}

export default createitem;