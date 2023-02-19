import { Layout, Col, Row, List, Space, Typography, Divider } from "antd";
import React from "react";
import PhotoCarousel from "../components/carousel";
import DayCountdown from "../components/countdown";
import leafBorder from "../pictures/leafBorder.webp";

const { Content } = Layout;

const { Title } = Typography;

const details = [
  {
    title: "Ceremony Location & Time",
    description: "Sacred Heart of Jesus Parish in Wadsworth, Ohio at 02:00 PM",
    link: "https://www.google.com/maps/place/Sacred+Heart+of+Jesus+Catholic+Church/@41.0258861,-81.7251857,17z/data=!3m1!4b1!4m6!3m5!1s0x8830cda878058707:0xec0d02f447d8bd09!8m2!3d41.0258861!4d-81.7229917!16s%2Fg%2F1tcvpxq9",
  },
  {
    title: "Reception Location & Time",
    description: "Boland House in Wadsworth, Ohio following the ceremony",
    link: "https://www.google.com/maps/place/10303+Mt+Eaton+Rd,+Wadsworth,+OH+44281/@40.9931132,-81.7314504,17z/data=!3m1!4b1!4m6!3m5!1s0x8830cd2f4be940cb:0xfb719b6f2e642c46!8m2!3d40.9931132!4d-81.7292564!16s%2Fg%2F11c4y_wwm5",
  },
  {
    title: "Ceremony Dress code",
    description: "Church attire",
  },
  {
    title: "Reception Dress code",
    description: "Whatever your heart desires :)",
  },
];

// const faq = [
//   {
//     title: "How do I RSVP?",
//     description:
//       "Click on 'RSVP' in the navigation bar and follow the directions on the page.",
//   },
//   {
//     title: "What is an NFT?",
//     description:
//       "NFT stands for 'Non-Fungible Token'. Russell and Grace have created NFTs as a fun way to uniquely identify your participation in this momentous event. Please see the NFT tab for further information and step-by-step instructions",
//   },
//   {
//     title: "What about wedding gifts?",
//     description:
//       "In lieu of wedding gifts, Russell and Grace are requesting donations to charitable organizations. This is in no way expected, however if you would like to, Russell and Grace have listed some charitable organizations they like and support on the Donations tab.",
//   },
// ];

export default function WeddingInfo() {
  return (
    <Layout>
      <Content>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Row align="top" justify="center" className="leafContainer">
            <Col span={24}>
              <img src={leafBorder} alt="leaf border" className="imgBorder" />{" "}
            </Col>
          </Row>
          <Row>
            <Col xs={0} sm={4}></Col>
            <Col xs={24} sm={16}>
              <div className="weddingDate">
                <Title>Russell & Grace</Title>
                <Row>
                  <Col xs={24} sm={11} align="right" justify="middle">
                    <Title level={3}>June 02, 2023</Title>
                  </Col>
                  <Col xs={24} sm={2}>
                    <Title level={3}>&#8226;</Title>
                  </Col>
                  <Col xs={24} sm={11} align="center" justify="middle">
                    <Title level={3}>
                      <DayCountdown />
                    </Title>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={0} sm={4}></Col>
          </Row>
          <Row>
            <Col xs={0} sm={4}></Col>
            <Col xs={24} sm={16}>
              <PhotoCarousel />
            </Col>
          </Row>
          <Row>
            <Col xs={0} sm={4}></Col>
            <Col xs={24} sm={16}>
              <div>
                <List
                  size="large"
                  header={
                    <>
                      <Row className="listContainer">
                        <Col span={24}>
                          <Title className="listHeader" level={4}>
                            Details
                          </Title>
                          <Divider className="divider" />
                        </Col>
                      </Row>
                      <Row
                        align="top"
                        justify="center"
                        className="borderContainer"
                      >
                        <Col span={24}>
                          <img
                            src={leafBorder}
                            alt="leaf border"
                            className="leafBorder"
                          />{" "}
                        </Col>
                      </Row>
                    </>
                  }
                  bordered
                  dataSource={details}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                        description={
                          <a href={item.link} target="_blank" rel="noreferrer">
                            {item.description}
                          </a>
                        }
                      />
                    </List.Item>
                  )}
                ></List>
              </div>
            </Col>
          </Row>
        </Space>
      </Content>
    </Layout>
  );
}
