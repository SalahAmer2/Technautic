import NavBarFlatItems from "../NavBarFlatItems/NavBarFlatItems";
import "./TopSellersPage.styles.css";
const sellers: Array<any> = [
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Prankssy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
  {
    img: "assets/images/top-sellers-img.png",
    name: "Pranksy",
    amount: "37.35",
  },
];
const TopSellers: React.FC = () => {
  return (
    <div className="topFlattersPage">
      <NavBarFlatItems />
      <div className="ranked-sellers">
        <div
          className="hot-bids-header-top-sellers aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <h2> Top Sellers</h2>
        </div>
        <div className="top-sellers-inner">
          {sellers.map((item, index) => (
            <div key={index} className="top-seller-inner-holder">
              <div className="top-seller-img-holder">
                <div className="seller-number-in-list">{index + 1}</div>
                <a href="top-sellers.html">
                  <img src={item.img} alt="" />
                </a>
                <a href="top-sellers.html">
                  <div className="top-sellers-detail-holder">
                    <p className="numb-rank-seller">{item.name}</p>{" "}
                    <span>{item.amount} BNB</span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
