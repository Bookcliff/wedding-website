import { Menu, PageHeader, Row } from 'antd';
import Search from 'antd/lib/transfer/search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import weddingLogo2 from '../weddingLogo2.png';


const items = [
    { label: (<Link to="/pages/weddingInfo"> Wedding Information</Link>), key: "weddingInfo", },
    { label: (<Link to="/rsvp">RSVP</Link>), key: "rsvp", },
    { label: (<Link to="/party">Wedding Party</Link>), key: "party", },
    { label: (<Link to="/registry">Registry</Link>), key: "registry", },
    { label: (<Link to="/nft">NFT Information</Link>), key: "nft", }
];

const NavMenu = () => {
    const [current, setCurrent] = useState('weddingInfo');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

};

const MainHeader = () => {
    return (
        <PageHeader
            avatar={{ src: weddingLogo2, size: "large" }}
            extra={<Search />}>
            <Row span={24}>
                <NavMenu />
            </Row>
        </PageHeader>
    )
}

export default MainHeader;