import BurgerIcon from "../components/BurgerIcon.component";

function Detail() {
    return (
        <div className="detailPage">
              
              <div className="outer">
        <div className="header-holder">
            <BurgerIcon />
            <div className="custom-container">

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


        <div className="detail-page-outer clearfix" id="home">
            <div className="chain-container clearfix">
                <div className="row">
                    <div className="col-md-7">
                        <div className="detail-page-left-img">
                            <img src="assets/images/detail-page-left-img.png" alt=""/>
                        </div>

                        <audio src="assets/images/ES_Arabic Peninsula - Sight of Wonders.mp3" preload="auto"/>
                    </div>
                    <div className="col-md-5">
                        <div className="detail-page-right">
                            <div className="nft-heading">
                                <div className="nft-heading-top">
                                    <h2>NFT ID: <span>12433</span></h2>
                                    <div className="nft-likes">
                                        <img src="assets/images/heart-icon.jpg" alt="" className="nft-likes-icon"/>
                                        <img src="assets/images/heart-icoen.jpg" alt=""/>
                                       </div>
                                </div>
                                
                                <h2>Sketches From Quiet<br/>
                                    Earth #1:
                                   
                                   
                                </h2>
                               <div className="likes-holder">
                                <p>6 of 10</p>
                               
                               </div>
                               
                            </div>
                           

                            <div className="last-price">

                                <p>Price = 4 BNB <span>(  Lowest price: 3 BNB)</span></p>
                            </div>
                            <div className="last-price">

                                <p>Your Bid: 1 BNB <span>(Highest Bid: 2 BNB)</span></p>
                            </div>
                            <div className="detail-page-bottom">
                                <p>10% of sale will go to creator</p>
                            </div>
                            
                        </div>
                       
                        <div className="tabs-outer">
                            <ul className="nav nav-tabs">
                                <li className="active">
                                    <a id="1" href="#">Info</a>
                                </li>
                                <li><a id="4" href="#">Owners</a></li>
                                <li><a id="3" href="#">History</a></li>
                                <li><a id="2" href="#">Bids</a></li>
                               
                             
                                
                               
                            </ul>
                        </div>


                       
                        <div className="tabContent" id="tabContent1">
                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <div className="panel-title-img " data-toggle="collapse"
                                                data-parent="#accordion" ref="#collapseOne">
                                                <img src="assets/images/panel-img-con.png" alt=""/>
                                                <div className="panel-title-detail">
                                                    <p>Owners</p>
                                                    <span>0xb620..48hsn <img src="assets/images/copy.png" alt=""/></span>
                                                </div>

                                            </div>

                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in">
                                        <div className="panel-body">
                                            <div className="panel-body-text">
                                                <p>20% of sales will go to creator</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <div className="panel-title-img " data-toggle="collapse"
                                                data-parent="#accordion" ref="#collapseTwo">
                                                <img src="assets/images/top-sellers-img-thir.png" alt=""/>
                                                <div className="panel-title-detail">
                                                    <p>Creater</p>
                                                    <span>Adif Raza <img src="assets/images/copy.png" alt=""/></span>
                                                </div>

                                            </div>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <div className="panel-body-text">
                                                <p>20% of sales will go to creator</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <div className="panel-title-img " data-toggle="collapse"
                                                data-parent="#accordion" ref="#collapseThree">
                                                <img src="assets/images/panel-img-con.png" alt=""/>
                                                <div className="panel-title-detail">
                                                    <p>Owners</p>
                                                    <span>0xb620..48hsn <img src="assets/images/copy.png" alt=""/></span>
                                                </div>

                                            </div>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <div className="panel-body-text">
                                                <p>20% of sales will go to creator</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tabContent" id="tabContent2">
                            <div className="tab-2-offers-detail">
                                <p><a href="">@waste</a> made an offer of 1.2Ξ</p>
                                <p>3 HOURS AGO <a href="">[view tx]</a> </p>
                            </div>
                            <div className="tab-2-offers-detail">
                                <p><a href="">@waste</a> made an offer of 1.2Ξ</p>
                                <p>3 HOURS AGO <a href="">[view tx]</a> </p>
                            </div>
                            <div className="tab-2-offers-detail">
                                <p><a href="">@waste</a> made an offer of 1.2Ξ</p>
                                <p>3 HOURS AGO <a href="">[view tx]</a> </p>
                            </div>
                        </div>
                        
                        <div className="tabContent" id="tabContent3">
                            <div className="panel-title-img " data-toggle="collapse" data-parent="#accordion"
                                ref="#collapseThree">
                                <img src="assets/images/panel-img-con.png" alt=""/>
                                <div className="panel-title-detail">
                                    <p>Put on sale for <strong>0.13 BNB</strong> 3 hours ago
                                        by L'Avion</p>

                                </div>

                            </div>
                            <div className="panel-title-img " data-toggle="collapse" data-parent="#accordion"
                                ref="#collapseThree">
                                <img src="assets/images/panel-img-con.png" alt=""/>
                                <div className="panel-title-detail">
                                    <p>Put on sale for <strong>0.13 BNB</strong> 3 hours ago
                                        by L'Avion</p>

                                </div>

                            </div>
                        </div>
                        
                        <div className="tabContent" id="tabContent4">
                            <div className="panel-title-img " data-toggle="collapse" data-parent="#accordion"
                                ref="#collapseFour">
                                <img src="assets/images/panel-img-con.png" alt=""/>
                                <div className="row">
                                    <div className="col-6 col-md-6">
                                        <div className="panel-title-detail">
                                            <p>Owners</p>
                                            <span>0xb620..48hsn <a href="#"><img src="assets/images/copy.png" alt=""/></a> </span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6">
                                       <div className="panel-title-detail">
                                          <p>Hold</p> 
                                          <span>49945</span>
                                       </div>
                                    </div>
                                </div>
                                

                            </div>
                            <div className="panel-title-img " data-toggle="collapse" data-parent="#accordion"
                                ref="#collapseFour">
                                <img src="assets/images/panel-img-con.png" alt=""/>
                                <div className="row">
                                    <div className="col-6 col-md-6">
                                        <div className="panel-title-detail">
                                            <p>Owners</p>
                                            <span>0xb620..48hsn <a href="#"><img src="assets/images/copy.png" alt=""/></a></span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6">
                                       <div className="panel-title-detail">
                                          <p>Hold</p> 
                                          <span>49945</span>
                                       </div>
                                    </div>
                                </div>
                                

                            </div>
                           
                        </div>
                        <div className="detail-page-actions">
                            <div className="row">
                                <div className="col-md-4 nopadding">
                                    <div className="buy-now-btn-outer">
                                        <a href="#">Buy Now</a>
                                    </div>
                                </div>
                                <div className="col-md-4 nopadding">
                                    <div className="buy-now-btn-outer">
                                        <a href="#">place a bid</a>
                                    </div>

                                </div>
                                <div className="col-md-4 nopadding">
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
	   </div>
        
		<div id="c-mask-right" className="c-mask"></div>
       
        </div>
    )

    
}

export default Detail;