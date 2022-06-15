import { Layout, Col, Row, List, Avatar } from 'antd';
import React from 'react';
import MainHeader from './header';
import weddingLogo2 from '../weddingLogo2.png';


const { Content, Footer } = Layout;

const details = [
    { title: "Ceremony Location & Time", description: "xxxx at xx:xx", },
    { title: "Reception Location & Time", description: "xxxx at xx:xx", },
    { title: "Dress code", description: "Wear whatever you feel comfortable wearing, keeping in mind that the ceremony is in a church", },
    { title: "Color scheme", description: "xxxx", },
]

const faq = [
    { title: "How do I RSVP?", description: "Click on 'RSVP' in the navigation bar and follow the directions on the page" },
    { title: "What is an NFT?", description: "NFT stands for (https://en.wikipedia.org/wiki/Non-fungible_token)['Non-Fungible Token']. Russell and Grace have created NFTs as a fun way to uniquely identify your participation in this momentous event. Please see the NFT tab for further information and step-by-step instructions" },
    { title: "What about wedding gifts?", description: "In lieu of wedding gifts, Russell and Grace are requesting donations to charitable organizations. This is in no way expected, however if you would like to, Russell and Grace have listed some charitable organizations they like and support on the Donations tab." }

]


export default function WeddingInfo() {
    return (
        <Layout>
            <MainHeader />
            <Content>
                <Row>
                    <Col xs={0} sm={4}></Col>
                    <Col xs={24} sm={16}>
                        <div className="weddingDate">
                            XX-XX-XXXX
                        </div>
                    </Col>
                    <Col xs={0} sm={4}></Col>
                </Row>
                <Row>
                    <Col xs={0} sm={4}></Col>
                    <Col xs={24} sm={16}>
                        <div>
                            <List
                                size="large"
                                header={<div>Details</div>}
                                bordered
                                dataSource={details}
                                renderItem={(item) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={weddingLogo2} />}
                                            title={item.title}
                                            description={item.description} />
                                    </List.Item>
                                )}>
                            </List>
                        </div>
                    </Col>
                </Row>
            </Content>
            <Footer>
                <Row>
                    Footer
                </Row>
            </Footer>
        </Layout >
    )
}