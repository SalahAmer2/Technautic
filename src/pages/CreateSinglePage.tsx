function Createsingle() {
    return (
        <div className="createSinglePage">

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
                <a href="index.html" className="transparent-logo"><img src="assets/images/opt-logo3.png" alt=""/></a>
                <a href="index.html" className="white-logo"><img src="assets/images/opt-logo3.png" alt=""/></a>
            </div>
            <div className="navigation-holder">
                <ul className="mobile-nav">
                    <div className="logo-mobile">
                        
                        <a href="index.html" className="white-logo"><img src="assets/images/profile-icon-img.png" alt=""/></a>
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
                   

                    <li><a href="create-item.html">Create</a></li>
                    <li><a href="markeet.html" className="#">Connnect Wallet</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="single-create-outer">
        <div className="chain-container clearfix">
            <div className="row">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="create-single-headings">
                                <h2>Create single</h2>
                            </div>
                        </div>

                    </div>
                   
                    <div>
                        <div className="file-uploader-outer">
                            <div className="col-sm-12 col-lg-12 mr-auto ml-auto border p-4">
                                <form method="post" encType="multipart/form-data">
                                    <div className="form-group">
                                        <label><strong>Upload Files</strong></label>
                                        <div className="custom-file">
                                            <input type="file" name="files[]" multiple className="custom-file-input form-control" id="customFile"/>
                                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" name="upload" value="upload" id="upload" className="btn btn-block btn-blue"><i className="fa fa-fw fa-upload"></i> Upload</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="item-detail-outer">
                            <h2>Item Details</h2>
                            <div className="item-name-holder">
                                <div className="form-group">
                                    <label htmlFor="email">Name:</label>
                                    <input type="text" className="form-control form-footer" id="item-name" placeholder="NFT Name" name="NFT Name"/>
                                </div>
                            </div>
                            <div className="item-name-holder">
                                <div className="form-group">
                                    <label htmlFor="email">Descripton:</label>
                                    <input type="text" className="form-control form-footer" id="item-description" placeholder="NFT Description" name="NFT Description"/>
                                </div>
                            </div>
                            <div className="form-group item-size">
                                <label htmlFor="email">Price:</label>
                                <input type="text" className="form-control form-footer" id="item-size" placeholder="NFT Price" name="nft-price"/>
                            </div>
                           
                        </div>
                        
                        <div className="connect-acount-holder">
                            <a href="#" className="connect-wallet-create-btn">Create</a>
                        </div>

                    </div>

                </div>

               
                <div className="col-md-5">
                    <div className="collectible-preview-profile-holder">
                        <span>Preview</span>
                        <div className="create-item-img-holder">
                            <img src="assets/images/create-item-img.jpg" alt=""/>
                        </div>

                        <div className="row">
                            <div className="col-md-6">

                                <div className="collectible-price">
                                    <p>Black Golden Tiger</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-preview-price-btn-holder">
                                    <a href="#" className="btn-profile-price">2.5 BNB</a>
                                </div>

                            </div>
                        </div>



                        <a href="#">Clear All</a>
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
                                <img src="assets/images/opt-logo3.png" alt=""/>
                               
                                <section className="home-newsletter">

                                    <div className="input-group">
                                        <input type="email" className="form-control form-footer" placeholder="Enter your email"/>
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

export default Createsingle;