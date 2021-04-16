import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {person} from '../data';
import Workers from './Workers';
import '../common.css';

const TopWorkers = () => {
    return (
        <div className="container-fluid bg-light">
            <Row className=" mx-1 py-5">
                <Col md={7} className="t-worker mb-3">
                    <h2>Top workers in December</h2><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Asesds wesdsa sdw<br/> Lorem ipsum dolor sit amet, sdw ds swewss consectetur adipiscing elit. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Lorem  sw wessdw ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum , <br/>consectetur adipiscing elit.</p>
                </Col>
                <Col md={5}>
                    {
                        person.map(x=> <Workers info={x} key={x.id}></Workers>)
                    }
                </Col>
            </Row>
        </div>
    );
};

export default TopWorkers;