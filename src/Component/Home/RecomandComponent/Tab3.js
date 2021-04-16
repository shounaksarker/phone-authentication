import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import tag from '../../../imgs/tag.png';
import '../common.css';

const Tab3 = (props) => {
    const {title, date, address, offer, postedBy, price, img} = props.info;
    const location = <FontAwesomeIcon icon={'map-marker-alt'} />
    return (
        <div className='tabs'>
            <Row className="py-4 border-top">
                <Col md={4}>
                    <img src={img} alt="" className="w-100"/>
                </Col>
                <Col md={8}>
                    <small>{date}</small>
                    <Row>
                        <div className='col-8'>
                            <h4>{title}</h4>
                            <small>Posted By: {postedBy}</small>
                            <p className='mt-3 location'><span>{location}</span> {address}</p>
                        </div>
                        <div className='col-4'>
                            <h4>$ {price}</h4>
                            <p className='tag text-muted' ><img src={tag} alt="tag"/> {offer} offers</p>
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Tab3;