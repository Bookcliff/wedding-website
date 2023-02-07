import { Layout, Row, Col, Typography } from "antd";
import React from "react";
import leafBorder from "../pictures/leafBorder.webp";
import largeWeddingLogo from "../pictures/largeWeddingLogo.webp";
import RsvpForm from "../components/rsvpForm";

const { Content } = Layout;

const { Title } = Typography;

export default function Rsvp() {
  return (
    <Layout>
      <Content>
        <Row style={{ height: "5vh" }}>
          <Col span={24}></Col>
        </Row>
        <Row>
          <Col xs={0} sm={6}></Col>
          <Col xs={24} sm={12} className="rsvpCard">
            <Row className="leafContainer">
              <Col span={24} align="center">
                <img
                  src={leafBorder}
                  alt="leaf border"
                  className="rsvpBorder"
                />
              </Col>
            </Row>
            <Row>
              <Col span={24} align="center">
                <Title level={1} className="rsvpFont">
                  You are invited!
                </Title>
              </Col>
            </Row>
            <Row>
              <Col span={24} className="rsvpLogoContainer" align="center">
                <img
                  src={largeWeddingLogo}
                  className="rsvp-logo"
                  alt="weddinglogo"
                />
              </Col>
            </Row>
            <Row>
              <Col span={24} align="center">
                <Title level={2} className="rsvpFont">
                  Join Russell & Grace in a celebration of their marriage.
                </Title>
              </Col>
            </Row>
            <Row>
              <Col span={24} align="center">
                <RsvpForm />
              </Col>
            </Row>
          </Col>
          <Col xs={0} sm={6}></Col>
        </Row>
      </Content>
    </Layout>
  );
}
