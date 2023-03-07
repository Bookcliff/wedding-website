import { Layout, Row, Col, Typography } from "antd";
import React from "react";
import { CommentSubmission } from "../components/commentForm";
import { CommentSection } from "../components/commentList";

const { Content } = Layout;
const { Title } = Typography;

export default function Comments() {
  return (
    <Layout>
      <Content>
        <Row style={{ justifyContent: "center", margin: "16px" }} gutter={16}>
          <Title className="weddingDate">Messages</Title>
        </Row>
        <Row style={{ margin: "16px" }} gutter={16}>
          <Col xs={0} md={2} lg={6}></Col>
          <Col xs={24} md={20} lg={12}>
            <CommentSubmission />
            <CommentSection />
          </Col>
          <Col xs={0} md={2} lg={6}></Col>
        </Row>
      </Content>
    </Layout>
  );
}
