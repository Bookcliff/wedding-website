import { Layout, Col, Row, List, Space, Typography, Divider } from "antd";
import React, { useEffect, useState } from "react";
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
    link: "https://en.wikipedia.org/wiki/Religious_clothing#/media/File:Costumes_religieux_RELIGIOUS_CLOTHING_costumes_habit_historical_christian_liturgical_clerical_ancient_Jews_orders_monks_nuns_Asian_etc_PD_illustration_French_encyclopedia_Larousse_du_XX%C3%A8me_si%C3%A8cle_1932.jpg",
  },
  {
    title: "Reception Dress code",
    description: "Whatever your heart desires :)",
    link: "https://imgur.com/1cbT9GR",
  },
];

export default function WeddingInfo() {
  const [phone, setPhone] = useState();

  useEffect(() => {
    console.log(window.innerWidth);
    const size = window.innerWidth;

    if (size > 600) {
      setPhone(false);
    } else {
      setPhone(true);
    }
  }, []);

  const dateAlignment = () => {
    console.log(phone);
    if (phone) {
      return "center";
    } else {
      return "right";
    }
  };

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
            <Col xs={0} md={2} lg={6}></Col>
            <Col xs={24} md={20} lg={12}>
              <div className="weddingDate">
                <Title>Russell & Grace</Title>
                <Row>
                  <Col xs={24} sm={11} align={dateAlignment()} justify="middle">
                    <Title level={3}>June 02, 2023</Title>
                  </Col>
                  <Col xs={24} sm={2}>
                    <Title level={3}>&#8226;</Title>
                  </Col>
                  <Col xs={24} sm={11} align={dateAlignment()} justify="middle">
                    <Title level={3}>
                      <DayCountdown phone={phone} />
                    </Title>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={0} md={2} lg={6}></Col>
          </Row>
          <Row>
            <Col xs={0} md={2} lg={6}></Col>
            <Col xs={24} md={20} lg={12}>
              <PhotoCarousel />
            </Col>
          </Row>
          <Row>
            <Col xs={0} md={2} lg={6}></Col>
            <Col xs={24} md={20} lg={12}>
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
                          <div className="leafBorder">
                            <img
                              src={leafBorder}
                              alt="leaf border"
                              style={{ width: "100%" }}
                            />
                          </div>
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
            <Col xs={0} md={2} lg={6}></Col>
          </Row>
        </Space>
      </Content>
    </Layout>
  );
}
