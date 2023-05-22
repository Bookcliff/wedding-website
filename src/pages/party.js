import { Layout, Row, Col, Card, Typography, Space } from "antd";
import React from "react";
import steve from "../pictures/steve.jpg";
import sarah from "../pictures/sarah.jpg";
import kyle from "../pictures/kyle.jpg";
import emerson from "../pictures/emerson.jpg";
import betsy from "../pictures/betsy.jpg";
import dominic from "../pictures/dominic.jpg";
import matthias from "../pictures/matthias.jpg";

const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

export default function Party() {
  return (
    <Layout>
      <Content>
        <Row style={{ justifyContent: "center", margin: "16px" }} gutter={16}>
          <Title className="weddingDate">Wedding Party</Title>
        </Row>
        <Row style={{ margin: "16px" }} gutter={16}>
          <Col xs={0} md={2} lg={6}></Col>
          <Col xs={24} md={10} lg={6}>
            <Card title="Groom's Party" headStyle={{ background: "#798878" }}>
              <Space
                direction="vertical"
                size="middle"
                style={{
                  display: "flex",
                }}
              >
                <Card
                  type="inner"
                  cover={<img alt="Steven Gates" src={steve} />}
                >
                  <Meta title="Steven Gates" description="Best Man" />
                </Card>
                <Card
                  type="inner"
                  cover={<img alt="Kyle Trusler" src={kyle} />}
                >
                  <Meta title="Kyle Trusler" description="Best Man" />
                </Card>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={10} lg={6}>
            <Card title="Bridal Party" headStyle={{ background: "#798878" }}>
              <Space
                direction="vertical"
                size="middle"
                style={{
                  display: "flex",
                }}
              >
                <Card
                  type="inner"
                  cover={<img alt="Sarah Barksdale" src={sarah} />}
                >
                  <Meta title="Sarah Barksdale" description="Maid of Honor" />
                </Card>
                <Card
                  type="inner"
                  cover={<img alt="Betsy Galicia" src={betsy} />}
                >
                  <Meta title="Betsy Galicia" description="Maid of Honor" />
                </Card>
              </Space>
            </Card>
          </Col>
          <Col xs={0} md={2} lg={6}></Col>
        </Row>
        <Row style={{ justifyContent: "center", margin: "16px" }} gutter={16}>
          <Title className="weddingDate">Support</Title>
        </Row>
        <Row style={{ margin: "16px" }} gutter={16}>
          <Col xs={0} md={2} lg={6}></Col>
          <Col xs={24} md={10} lg={6}>
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
              }}
            >
              <Card cover={<img alt="Dominic Boland" src={dominic} />}>
                <Meta title="Dominic Boland" description="Music" />
              </Card>
            </Space>
          </Col>
          <Col xs={24} md={10} lg={6}>
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
              }}
            >
              <Card cover={<img alt="Emerson Cloud" src={emerson} />}>
                <Meta title="Emerson Cloud" description="Photographer" />
              </Card>
              <Card cover={<img alt="Matthias Boland" src={matthias} />}>
                <Meta
                  title="Matthias Boland"
                  description="Altar Server & Chipotle Gatherer"
                />
              </Card>
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
