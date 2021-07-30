import BurgerIcon from "../components/BurgerIcon.component";
import MarketLogo from "../components/MarketLogo.component";
import NavBar from "../components/NavBar.component";
import ItemCard from "../components/ItemCard.component";

function Market() {

    const page = "Market";

    return (   
        <div className="marketPage">
            <div className="outer">
                <div className="header-holder">
                    <BurgerIcon />
                    <div className="custom-container">
                        <div className="navigation-holder">
                            <MarketLogo />
                            <div className="navigation">
                                <NavBar />
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
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                            <ItemCard page={page} />
                        </div>
                    </div>
                </div>
                <div id="c-mask-right" className="c-mask"></div>
            </div>
        </div>
    )
}

export default Market;