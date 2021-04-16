import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { person } from '../data';
import Candidate from './Candidate';
import '../common.css'

const FeatureCandidate = () => {
    return (
        <div className="container-fluid py-4">
            <div className='mx-3'>
                <h2 className=''>Feature Candidates</h2>
                <p className='emptyColor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Row className="mx-1 justify-content-between">
                <Col lg={5} md={12} className="pr-2">
                    {
                        person.map(x => <Candidate info={x} key={x.id}></Candidate>)
                    }
                </Col>
                <Col lg={5} md={12} className="pl-2">
                    {
                        person.map(x => <Candidate info={x} key={x.id}></Candidate>)
                    }
                </Col>
            </Row>
        </div>
    );
};

export default FeatureCandidate;