import { Statistic, Typography, Col, Row } from 'antd';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 365; // Moment is also OK

const { Title } = Typography;

const DayCountdown = () => {
    const onFinish = () => {
        console.log('finished!');
    };

    return (
        <>
            <Row>
                <Col><Countdown value={deadline} format="D " onFinish={onFinish} style={{ paddingRight: '20px', fontSize: '100px', fontStyle: 'italic' }} /></Col>
                <Col><Title level={3}>Days left</Title></Col>
            </Row></>
    );
};

export default DayCountdown;