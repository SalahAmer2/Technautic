import React, { useState } from "react";
import { ReactEventHandler } from "react";
import "./DetailSection.css";

interface IProps {
  onClick?: ReactEventHandler;
  item?: any;
  index?: any;
}

const DetailSection: React.FC<IProps> = ({ item, index }) => {
  const [state, setstate] = useState<boolean>(false);
  const [state2, setstate2] = useState<number>();
  const showMoreDetail = (index): void => {
    setstate(!state);
    setstate2(index);
  };
  return (
    <div>
      <div className="panel-heading">
        <h4 className="panel-title">
          <div
            className="panel-title-img "
            data-toggle="collapse"
            data-parent="#accordion"
          >
            <span
              onClick={() => showMoreDetail(index)}
              className="toggleCollapseOne"
            >
              <img src={item.img1} alt="" />
              <div className="panel-title-detail">
                <p>{item.name}</p>
                <span>
                  {item.id} <img src={item.img2} alt="" />
                </span>
              </div>
            </span>
          </div>
        </h4>
      </div>
      <div
        className={`${
          state === true && state2 === index ? "detail-opened" : "detail-closed"
        }`}
      >
        <div className="panel-body">
          <div className="panel-body-text">
            <p>{item.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
