import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* navigation for mobile footer*/
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
/* main css */
import "./Footer.css";

const Footer = () => {
    const googlePlay = <FontAwesomeIcon icon={['fab', 'google-play']} />
    const apple = <FontAwesomeIcon icon={['fab', 'apple']} />
    const fb = <FontAwesomeIcon icon={['fab', 'facebook']} />
    const twitter = <FontAwesomeIcon icon={['fab', 'twitter']} />
    const yt = <FontAwesomeIcon icon={['fab', 'youtube']} />
    return (
        <footer>
            <div className="container-fluid footr pb-5">
                <Row className="py-5 d-none d-sm-none d-md-flex">
                    <Col md={3}>
                        <ul>
                            <h4>Discover</h4>
                            <li>How it works</li>
                            <li>Airtasker for business</li>
                            <li>Earn money</li>
                            <li>New users FAQ</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul>
                            <h4>Company</h4>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Media enquiries</li>
                            <li>Community guidelines</li>
                            <li>Tasker principles</li>
                            <li>Terms & conditions</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                            <li>Privacy policy</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul>
                            <h4>Existing Member</h4>
                            <li>Post a task</li>
                            <li>Browse tasks</li>
                            <li>Login</li>
                            <li>Support centre</li>
                            <li>Merchandise</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul>
                            <h4>Popular Categories</h4>
                            <li>Handyman Services</li>
                            <li>Cleaning Services</li>
                            <li>Delivery Services</li>
                            <li>Removalists</li>
                            <li>Gardening Services</li>
                            <li>Automotive</li>
                            <li>Assembly Services</li>
                            <li>All Services</li>
                        </ul>
                    </Col>
                </Row>

                {/* Mobile Footer */}
                <div className="for-mobile mb-2 d-block d-sm-block d-md-none">
                    <Accordion atomic={true}>

                        <AccordionItem title="Discover">
                            <li><Link to={'/how-it-works'}>How it works</Link></li>
                            <li><Link to={'/airtasker'}>Airtasker for business</Link></li>
                            <li><Link to={'/earn-money'}>Earn money</Link></li>
                            <li><Link to={'/faq'}>New users FAQ</Link></li>
                        </AccordionItem>

                        <AccordionItem title="Company">
                            <li><Link to={'/about-us'}>About us</Link></li>
                            <li><Link to={'/career'}>Careers</Link></li>
                            <li><Link to={'/media-enquiries'}>Media enquiries</Link></li>
                            <li><Link to={'/community-guideLinknes'}>Community guideLinknes</Link></li>
                            <li><Link to={'/tasker-principles'}>Tasker principles</Link></li>
                            <li><Link to={'/tnc'}>Terms & conditions</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            <li><Link to={'/contact'}>Contact us</Link></li>
                            <li><Link to={'/privacy'}>Privacy policy</Link></li>
                        </AccordionItem>

                        <AccordionItem title="Existing Member">
                            <li><Link to={'/post-a-task'}>Post a task</Link></li>
                            <li><Link to={'/browse-task'}>Browse tasks</Link></li>
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/support'}>Support centre</Link></li>
                            <li><Link to={'/merchandise'}>Merchandise</Link></li>
                        </AccordionItem>

                        <AccordionItem title="Popular Categories">
                            <li><Link to={'/handyman-service'}>Handyman Services</Link></li>
                            <li><Link to={'/cleaning-service'}>Cleaning Services</Link></li>
                            <li><Link to={'/delivery-service'}>Delivery Services</Link></li>
                            <li><Link to={'/removal-list'}>Removal lists</Link></li>
                            <li><Link to={'/gardening-service'}>Gardening Services</Link></li>
                            <li><Link to={'/automotive'}>Automotive</Link></li>
                            <li><Link to={'/assembly-service'}>Assembly Services</Link></li>
                            <li><Link to={'/all-service'}>All Services</Link></li>
                        </AccordionItem>

                    </Accordion>
                    </div>
                {/* mobile-footer end */}


                {/* Google & Apple app button */}
                <div className="mt-3 mt-sm-0">
                    <Col lg={12} md={12} sm={12}>
                        <div className='row social ml-md-3 ml-3'> {/* social-row start */}
                            <div className='social-bg play d-flex align-items-center text-dark px-3 pt-1 rounded-lg mr-3 mb-md-0 mb-2'>
                                <span className='mr-2'>
                                    {googlePlay}
                                </span>
                                <div>
                                    <p className='mb-0'>Android app on</p>
                                    <h6>Google Play</h6>
                                </div>
                            </div>

                            <div className='social-bg apple d-flex align-items-center text-dark px-3 pt-1 rounded-lg mb-md-0 mb-2'>
                                <span className='mr-2'>
                                    {apple}
                                </span>
                                <div>
                                    <p className='mb-0'>IOS app on</p>
                                    <h6>App store</h6>
                                </div>
                            </div>

                            <div className='social-media d-flex align-items-center text-dark px-3 pt-1 rounded-lg'>
                                <a href='https://facebook.com' rel='noreferrer' target='_blank'><span className='rounded-circle mr-2'>{fb}</span></a> 
                                <a href="https://twitter.com" rel='noreferrer' target="_blank"><span className='rounded-circle mr-2'>{twitter}</span></a> 
                                <a href="https://youtube.com" rel='noreferrer' target="_blank"><span className='rounded-circle'>{yt}</span></a>
                            </div>

                        </div> {/* social-row end */}
                    </Col>
                </div>

            </div>
            
            <div className='copyright text-center'>
                <h6>Power odd 2020-2021©, All rights reserved</h6>
            </div>
        </footer>
    );
};

export default Footer;