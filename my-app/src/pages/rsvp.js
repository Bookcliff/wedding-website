import { Layout } from 'antd';
import React from 'react';
import MainHeader from './header'

const { Content, Footer } = Layout;

export default function Rsvp() {
    return (
        <Layout>
            <MainHeader />
            <Content>
                RSVP
            </Content>
            <Footer>

            </Footer>
        </Layout>
    )
}