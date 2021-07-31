import NavBarFlatItems from "../NavBarFlatItems/NavBarFlatItems";
import "./CreateSingle.css";

function Createsingle() {
  return (
    <div className="createSinglePage">
      <NavBarFlatItems />
      <div className="single-create-outer">
        <div className="something-unknown">
          <div className="create-single-headings">
            <h2>Create single</h2>
          </div>
          <div>
            <div className="file-uploader-outer">
              <form method="post" encType="multipart/form-data">
                <div className="">
                  <strong>Upload Files</strong>

                  <div className="custom-file">
                    <input
                      type="file"
                      name="files[]"
                      multiple
                      className="custom-file-input form-control"
                      id="customFile"
                    />
                    <label className="label-choose-file" htmlFor="customFile">
                      Browse
                    </label>
                  </div>
                </div>
                <div className="">
                  <button
                    type="button"
                    name="upload"
                    value="upload"
                    id="upload"
                    className="btn btn-block btn-blue"
                  >
                    <i className="fa fa-fw fa-upload"></i> Upload
                  </button>
                </div>
              </form>
            </div>
            <div className="item-detail-outer">
              <h2>Item Details</h2>
              <div className="item-name-holder">
                <div className="form-group">
                  <span>Name:</span>
                  <input
                    type="text"
                    className="form-control form-footer"
                    id="item-name"
                    placeholder="NFT Name"
                    name="NFT Name"
                  />
                </div>
              </div>
              <div className="item-name-holder">
                <div className="form-group">
                  <span>Descripton:</span>
                  <input
                    type="text"
                    className="form-control form-footer"
                    id="item-description"
                    placeholder="NFT Description"
                    name="NFT Description"
                  />
                </div>
              </div>
              <div className="form-group item-size">
                <span>Price:</span>
                <input
                  type="text"
                  className="form-control form-footer"
                  id="item-size"
                  placeholder="NFT Price"
                  name="nft-price"
                />
              </div>
            </div>
            <div className="connect-acount-holder">
              <a href="#" className="connect-wallet-create-btn">
                Create
              </a>
            </div>
          </div>
        </div>
        <div className="collectible-preview-profile-holder">
          <span>Preview</span>
          <div className="create-item-img-holder">
            <img src="assets/images/create-item-img.jpg" alt="" />
          </div>
          <div className="cardname-price">
            <div className="">
              <div className="collectible-price">
                <p>Black Golden Tiger</p>
              </div>
            </div>
            <div className="profile-preview-price-btn-holder">
              <a href="#" className="btn-profile-price">
                2.5 BNB
              </a>
            </div>
          </div>
          <a className="collectibel-clear-all" href="#">
            Clear All
          </a>
        </div>
      </div>
      <div id="roadmap-outer">
        <div className="" id="roadmap">
          <div
            className="footer-left-outer"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <div className="footer-left-detail">
              <img src="assets/images/opt-logo3.png" alt="" />
              <section className="home-newsletter">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control form-footer"
                    placeholder="Enter your email"
                  />
                  <span className="">
                    <button className="input-group-btn" type="submit">
                      Subscribe
                    </button>
                  </span>
                </div>
              </section>
            </div>
          </div>
          <div
            className="footer-center-links"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
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
          <div className="col-md-4" id="contact"></div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2021 Flatearth. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Createsingle;
