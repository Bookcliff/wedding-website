import { Layout, Row, Col, Typography } from 'antd';
import React from 'react';
import leafBorder from '../pictures/leafBorder.png';
import largeWeddingLogo from '../pictures/largeWeddingLogo.png'

const { Content } = Layout;

const { Title } = Typography;

export default function Rsvp() {
    return (
        <Layout>
            <Content>
                <Row style={{ height: '5vh' }}>
                    <Col span={24}></Col>
                </Row>
                <Row className='leafContainer'>
                    <Col xs={0} sm={4}></Col>
                    <Col xs={24} sm={16} align='center'>
                        <img src={leafBorder} alt='leaf border' className='rsvpBorder' />
                    </Col>
                    <Col xs={0} sm={4}></Col>
                </Row>
                <Row>
                    <Col xs={0} sm={4}></Col>
                    <Col xs={24} sm={16} align='center'>
                        <Title level={1} className='rsvpFont'>You are invited!</Title>
                    </Col>
                    <Col xs={0} sm={4}></Col>
                </Row>
                <Row>
                    <Col xs={0} sm={4}></Col>
                    <Col xs={24} sm={16} align='center'>
                        <img src={largeWeddingLogo} className="rsvp-logo" alt="weddinglogo" />
                    </Col>
                    <Col xs={0} sm={4}></Col>
                </Row>
                <Row>
                    <Col xs={0} sm={4}></Col>
                    <Col xs={24} sm={16} align='center'>
                        <Title level={2} className='rsvpFont'>Join Russell & Grace in a celebration of their marriage.</Title>                    </Col>
                    <Col xs={0} sm={4}></Col>
                </Row>
            </Content>
        </Layout>
    )
}