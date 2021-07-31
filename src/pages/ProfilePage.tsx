import BurgerIcon from "../components/BurgerIcon.component";
import MarketLogo from "../components/MarketLogo.component";
import NavBar from "../components/NavBar.component";
import MarketProfileHeader from "../components/MarketProfileHeader.component";
import ProfileCard from "../components/ProfileCard.component";
import ItemCard from "../components/ItemCard.component";
import "../components/main.css";
import './ProfilePage.styles.css'

function Profile() {

  const page = "Profile";

  return (
    <div className="profilePage">
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
          <MarketProfileHeader />
          <div className="chain-container">
            <div className="row">
              <div className="col-md-3">
                <ProfileCard />
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
                  </section>
                  <section id="content2" className="tab-content">
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
