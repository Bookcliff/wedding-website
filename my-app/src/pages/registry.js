import { Layout } from 'antd';
import React from 'react';
import MainHeader from './header';

const { Content, Footer } = Layout;

export default function Registry() {
    return (
        <Layout>
            <MainHeader />
            <Content>
                Registry
            </Content>
            <Footer>

            </Footer>
        </Layout>
    )
}