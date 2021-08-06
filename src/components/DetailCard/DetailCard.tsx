import React, { useState } from "react";
import "./DetailCard.css";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import DetailSection from "../DetailSection/DetailSection";
interface ITypes {
  Owners: {
    name: string;
    img1: string;
    img2: string;
    id: string;
    content: string;
  }[];
}

const owners: ITypes["Owners"] = [
  {
    name: "Owners",
    img1: "assets/images/panel-img-con.png",
    img2: "assets/images/copy.png",
    id: "0xb620..48hsn",
    content: "20% of sales will go to creator",
  },
  {
    name: "Owners",
    img1: "assets/images/panel-img-con.png",
    img2: "assets/images/copy.png",
    id: "0xb620..48hsn",
    content: "20% of sales will go to creator",
  },
];
const mixed: ITypes["Owners"] = [
  {
    name: "Owners",
    img1: "assets/images/panel-img-con.png",
    img2: "assets/images/copy.png",
    id: "0xb620..48hsn",
    content: "20% of sales will go to creator",
  },
  {
    name: "Creator",
    img1: "assets/images/top-sellers-img-thir.png",
    img2: "assets/images/copy.png",
    id: "Adif Raza",
    content: "20% of sales will go to creator",
  },
];
const DetailCard: React.FC = () => {
  return (
    <div className="detail-card">
      <Col style={{ width: "100%" }} xl="8" md="8">
        <Tab.Container defaultActiveKey="Info">
          <Nav
            style={{
              textAlign: "left",
              width: "95%",
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <Nav.Item>
              <Nav.Link eventKey="Info" className="title-font">
                Info
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Owners" className="title-font">
                Owners
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="History" className="title-font">
                History
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Bids" className="title-font">
                Bids
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="Info">
              <Row
                style={{ marginLeft: "1vw", width: "100%" }}
                className="mt-2"
              >
                {mixed.map((item, index) => (
                  <DetailSection index={index} key={index} item={item} />
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="Owners">
              <Row
                style={{ marginLeft: "1vw", width: "100%" }}
                className="mt-2"
              >
                {owners.map((item, index) => (
                  <DetailSection index={index} key={index} item={item} />
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="History">
              <Row></Row>
            </Tab.Pane>
            <Tab.Pane eventKey="Bids">
              <Row></Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Col>
    </div>
  );
};

export default DetailCard;
