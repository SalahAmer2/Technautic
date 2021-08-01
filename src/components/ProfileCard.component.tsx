import React from 'react'
import './ProfileCard.styles.css'
import {SocialMediaIconsReact} from 'social-media-icons-react';

const ProfileCard = () => {
    return (
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
                          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://some-website.com/my-social-media-url" size="20" />
                        </a>
                      </li>
                      <li>
                        <a className='middle-social-media-icon' href="#">
                          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://some-website.com/my-social-media-url" size="20" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://some-website.com/my-social-media-url" size="20" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>Member since 16 March 2021</span>
                </div>
    )
}

export default ProfileCard;
