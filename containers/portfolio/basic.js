import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Lightbox from "react-image-lightbox";
import { Container, Row, Col, Card, CardHeader, CardBody, Media } from 'reactstrap'
import { AllImgData, BagsImgData, FeshionImgData, ShoesImgData, WatchImgData } from './database';
import AllImgFun from './Gallerys/allImgs';
import FashionImgFunc from './Gallerys/fashionImgs';
import BagsImgFunc from './Gallerys/bagsImgs';
import WatchImgFuc from './Gallerys/watchImg';
import ShoesImgFun from './Gallerys/shoesImg';

const Basic = ({ className, title, subTitle, fluid }) => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <section className="portfolio-section fullwidth-portfolio masonray-sec zoom-gallery titles">
            <div className="filter-section">
                <Container fluid={true}>
                    <Row>
                        <Col xs="12">
                            <Nav tabs className="filter-container isotopeFilters">
                                <NavItem className="list-inline filter">
                                    <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                        All
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                        Fashion
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={activeTab == '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                        Bags
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={activeTab == '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                                        Shoes
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={activeTab == '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                                        Watch
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={fluid || 'container'}>
                <TabContent className="isotopeContainer row" activeTab={activeTab}>
                    <TabPane className="row" tabId="1">
                        <AllImgFun className={className} title={title} subTitle={subTitle} />
                    </TabPane>
                    <TabPane className="row" tabId="2">
                        <FashionImgFunc className={className} title={title} subTitle={subTitle} />
                    </TabPane>
                    <TabPane className="row" tabId="3">
                        <BagsImgFunc className={className} title={title} subTitle={subTitle} />
                    </TabPane>
                    <TabPane className="row" tabId="4">
                        <WatchImgFuc className={className} title={title} subTitle={subTitle} />
                    </TabPane>
                    <TabPane className="row" tabId="5">
                        <ShoesImgFun className={className} title={title} subTitle={subTitle} />
                    </TabPane>
                </TabContent>
            </div>

            {/* <!-- pagination Start --> */}
            <div className="pagination_sec">
                <div className="content_detail__pagination cdp">
                    <ul>
                        <li><a className="prev" href="#"><i aria-hidden="true" className="fa fa-angle-double-left"></i></a></li>
                        <li><a className="active cdp_i" href="#">1</a></li>
                        <li><a className="cdp_i" href="#">2</a></li>
                        <li><a className="cdp_i" href="#">3</a></li>
                        <li><a className="next" href="#"><i aria-hidden="true" className="fa fa-angle-double-right"></i></a></li>
                    </ul>
                </div>
            </div>
            {/* <!-- pagination End --> */}
        </section>
    );
}

export default Basic;