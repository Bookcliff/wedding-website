import { Layout, Row, Col } from "antd";
import weddingLogo2 from "../weddingLogo2.webp";

const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer className="mainFooter">
      <Row>
        <Col>
          <img src={weddingLogo2} alt="weddinglogo" className="footerLogo" />
        </Col>
        <Col>
          <p className="footerText">Russell & Grace</p>
        </Col>
      </Row>
    </Footer>
  );
};

export default MainFooter;
