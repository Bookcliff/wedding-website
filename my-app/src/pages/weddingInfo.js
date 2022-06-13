import { Layout, Col, Row, List } from 'antd';
import React from 'react';
import weddingLogo2 from '../weddingLogo2.png'
import { Link, Outlet } from 'react-router-dom'

const { Content, Footer } = Layout;

export default function WeddingInfo() {
    return (
        <Layout>
            <Row type="flex">
                <Col xs={0} sm={4}></Col>
                <Col xs={0} sm={6}>
                    <div>
                        <img src={weddingLogo2} className="wedding-logo" alt="weddinglogo" height='100%' />
                    </div>
                </Col>
                <Col xs={24} sm={14}>
                    <div>
                        <List itemLayout='horizontal'>
                            <List.Item key="rsvp">
                                <Link to="rsvp">RSVP</Link>
                            </List.Item>
                            <List.Item key="donations">
                                <Link to="donations">Donations</Link>
                            </List.Item>
                            <List.Item key="nft">
                                <Link to="nft">NFT Information</Link>
                            </List.Item>
                        </List>
                        <Outlet />
                    </div>
                </Col>
                <Col xs={0} sm={4}></Col>
            </Row>
            <Content>
            </Content>
            <Footer>
                Footer
            </Footer>
        </Layout >
    )
}