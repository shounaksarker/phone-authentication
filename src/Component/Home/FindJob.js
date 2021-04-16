import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
// images
import paint from '../../imgs/womanPaint.png';
import clean from '../../imgs/cleaning.png';
import delivery from '../../imgs/Delivery.png';
import beauty from '../../imgs/beauty.png';
import other from '../../imgs/other.png';
import './findjob.css';

const FindJob = () => {
    const search = <FontAwesomeIcon icon={'search'} />

    return (
        <div className="container-fluid">
            <Row className='mx-1 align-items-center'>
                <Col md={6} className="">
                    <div className="">
                        <h2 className="">Find The Best Job</h2>
                        <small>Search from 1500+ Jobs</small>
                    </div>

                    {/* === Search bar === */}
                    <div className="my-5">
                        <div id="custom-search-input">
                            <div className="input-group mb-2">
                                <input type="text" className=" search-query form-control" placeholder="Search Here..." />
                                <span className="input-group-btn">
                                    <button type="button">
                                        <span >{search}</span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* === Search bar end === */}

                    <div className="row">
                        <div className="col text-center border-right">
                            <img src={clean} alt="bucket" />
                            <p>Cleaning</p>
                        </div>
                        <div className="col text-center border-right">
                            <img src={delivery} alt="Delivery" />
                            <p>Delivery</p>
                        </div>
                        <div className="col text-center border-right">
                            <img src={beauty} alt="Beauty" />
                            <p>Beauty</p>
                        </div>
                        <div className="col text-center">
                            <img src={other} alt="Other" />
                            <p>Others</p>
                        </div>
                    </div>

                </Col>
                <Col md={6} className='d-flex position-relative pr-0'>
                    <div className="fade_right"></div>
                    <img src={paint} className='paint' alt="woman paint" />
                </Col>
            </Row>
        </div>
    );
};

export default FindJob;