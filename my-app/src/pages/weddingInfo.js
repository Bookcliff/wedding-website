import { Layout, Col, Row, List, Space, Typography } from 'antd';
import React from 'react';
import PhotoCarousel from '../components/carousel';


const { Content } = Layout;

const { Title } = Typography;

const details = [
    { title: "Ceremony Location & Time", description: "xxxx at xx:xx", },
    { title: "Reception Location & Time", description: "xxxx at xx:xx", },
    { title: "Dress code", description: "Wear whatever you feel comfortable wearing, keeping in mind that the ceremony is in a church", },
    { title: "Color scheme", description: "xxxx", },
]

const faq = [
    { title: "How do I RSVP?", description: "Click on 'RSVP' in the navigation bar and follow the directions on the page" },
    { title: "What is an NFT?", description: "NFT stands for 'Non-Fungible Token'. Russell and Grace have created NFTs as a fun way to uniquely identify your participation in this momentous event. Please see the NFT tab for further information and step-by-step instructions" },
    { title: "What about wedding gifts?", description: "In lieu of wedding gifts, Russell and Grace are requesting donations to charitable organizations. This is in no way expected, however if you would like to, Russell and Grace have listed some charitable organizations they like and support on the Donations tab." }

]


export default function WeddingInfo() {
    return (
        <Layout>
            <Content>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Row>
                        <Col xs={0} sm={4}></Col>
                        <Col xs={24} sm={16}>
                            <div className="weddingDate">
                                <Title>Russell & Grace</Title>
                                <Title level={3}>May XX XXXX &#8226; XXX days away</Title>
                            </div>
                        </Col>
                        <Col xs={0} sm={4}></Col>
                    </Row>
                    <Row>
                        <Col xs={0} sm={4}></Col>
                        <Col xs={24} sm={16}>
                            <PhotoCarousel />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={0} sm={4}></Col>
                        <Col xs={24} sm={16}>
                            <div>
                                <List
                                    size="large"
                                    header={<Title className="listHeader" level={4}>Details</Title>}
                                    bordered
                                    dataSource={details}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={item.title}
                                                description={item.description} />
                                        </List.Item>
                                    )}>
                                </List>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={0} sm={4}></Col>
                        <Col xs={24} sm={16}>
                            <div>
                                <List
                                    size="large"
                                    bordered
                                    header={<Title className="listHeader" level={4} >Frequently Asked Questions</Title>}
                                    dataSource={faq}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={item.title}
                                                description={item.description} />
                                        </List.Item>
                                    )}>
                                </List>
                            </div>
                        </Col>
                        <Col xs={0} sm={4}></Col>
                    </Row>
                </Space>
            </Content>
        </Layout >
    )
}