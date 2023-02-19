import { Menu, Layout, Row, Col } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import weddingLogo2 from "../weddingLogo2.webp";

const { Header } = Layout;

const items = [
  {
    label: <Link to="/pages/weddingInfo"> Wedding Information</Link>,
    key: "weddingInfo",
  },
  { label: <Link to="/party">Wedding Party</Link>, key: "party" },
  { label: <Link to="/registry">Registry</Link>, key: "registry" },
  { label: <Link to="/rsvp">RSVP</Link>, key: "rsvp" },

  // { label: (<Link to="/nft">NFT Information</Link>), key: "nft", }
];

const NavMenu = () => {
  const [current, setCurrent] = useState("weddingInfo");

  const onClick = (e) => {
    // console.log(e);
    setCurrent(e.key);
  };

  // console.log(current);

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="navMenu"
    />
  );
};

const MainHeader = () => {
  return (
    <Header className="mainHeader">
      <Row>
        <Col xs={0} sm={6} className="headerLogoContainer">
          <img src={weddingLogo2} alt="weddinglogo" className="headerLogo" />
        </Col>
        <Col xs={24} sm={18}>
          <NavMenu />
        </Col>
      </Row>
    </Header>
  );
};

export default MainHeader;
