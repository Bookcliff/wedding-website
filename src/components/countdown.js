import { Statistic, Typography, Col, Row } from "antd";
const { Countdown } = Statistic;

const deadline = new Date(2023, 5, 2);

const { Title } = Typography;

const DayCountdown = () => {
  const onFinish = () => {
    console.log("finished!");
  };

  return (
    <>
      <Row>
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
