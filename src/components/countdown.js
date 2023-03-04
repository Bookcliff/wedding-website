import { Statistic, Typography, Col, Row } from "antd";
import React, { useEffect, useState } from "react";

const { Countdown } = Statistic;

const deadline = new Date(2023, 5, 2);

const { Title } = Typography;

const DayCountdown = () => {
  const [phone, setPhone] = useState();
  const size = window.innerWidth;

  useEffect(() => {
    if (size > 600) {
      setPhone(false);
    } else {
      setPhone(true);
    }
  }, [size]);

  const onFinish = () => {
    console.log("finished!");
  };

  const dateAlignment = () => {
    if (phone) {
      return "center";
    } else {
      return "left";
    }
  };

  return (
    <>
      <Row style={{ display: "flex", justifyContent: dateAlignment() }}>
        <Col>
          <Countdown
            value={deadline}
            format="D "
            onFinish={onFinish}
            style={{ paddingRight: "20px", fontStyle: "italic" }}
          />
        </Col>
        <Col>
          <Title level={3}>Days left</Title>
        </Col>
      </Row>
    </>
  );
};

export default DayCountdown;
