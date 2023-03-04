import { Layout, Row, Col, Card, Typography } from "antd";
import React from "react";

const { Content } = Layout;
const { Title } = Typography;

export default function Registry() {
  return (
    <Layout>
      <Content>
        <Row style={{ justifyContent: "center", margin: "16px" }} gutter={16}>
          <Title className="weddingDate">Registry</Title>
        </Row>
        <Row style={{ justifyContent: "center", margin: "16px" }} gutter={16}>
          <Col xs={0} md={2} lg={6}></Col>
          <Col xs={24} md={20} lg={12}>
            <Card>
              <p>
                All we want is for you to spend our wedding day with us! In lieu
                of a traditional registry, we have chosen a few charities that
                we care about. Donations are in no way expected and any and all
                are greatly appreciated!
              </p>
            </Card>
          </Col>
          <Col xs={0} md={2} lg={6}></Col>
        </Row>
        <Row style={{ margin: "16px" }} gutter={16}>
          <Col xs={0} md={2} lg={6}></Col>
          <Col xs={24} md={10} lg={6}>
            <Card
              title="Grace's Selected Charities"
              headStyle={{ background: "#798878" }}
            >
              <Card
                type="inner"
                title="Catholic Charities USA"
                hoverable
                // extra={<a href="#">More</a>}
              >
                <a
                  href="https://www.catholiccharitiesusa.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Donate Now
                </a>
              </Card>
              <Card
                style={{
                  marginTop: 16,
                }}
                type="inner"
                hoverable
                title="Giving What We Can"
              >
                <a
                  href="https://www.givingwhatwecan.org/donate/organizations"
                  rel="noreferrer"
                  target="_blank"
                >
                  Donate Now
                </a>
              </Card>
            </Card>
          </Col>
          <Col xs={24} md={10} lg={6}>
            <Card
              title="Russell's Selected Charities"
              headStyle={{ background: "#798878" }}
            >
              <Card
                type="inner"
                title="Against Malaria Foundation"
                hoverable
                // extra={<a href="#">More</a>}
              >
                <a
                  href="https://www.againstmalaria.com/donate.aspx"
                  rel="noreferrer"
                  target="_blank"
                >
                  Donate Now
                </a>
              </Card>
            </Card>
          </Col>
          <Col xs={0} md={2} lg={6}></Col>
        </Row>
      </Content>
    </Layout>
  );
}
