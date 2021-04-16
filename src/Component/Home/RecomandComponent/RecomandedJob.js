import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Colps from './Colps';


const RecomandedJob = () => {
    const style = {
        background: '#E44159'
    }
    return (
        <div className="container-fluid mt-5 mt-sm-5 mt-md-2 mt-lg-2 mt-xl-0">
            <Row className="mx-1">
                <Col md={7}>
                    <div className="mb-3">
                        <h3>Recommended Jobs</h3>
                        <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                    </div>

                    <div>
                        <Colps></Colps>
                    </div>

                </Col>
                <Col md={5}>
                    <div className='h-100 row justify-content-center align-items-center p-3' style={style}>
                        <div className='mx-auto'>
                            <div>
                                <h1>How does powered work?</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum <br />dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            {/* <video width="400" controls>
                            <source src="your-video.mp4" type="video/mp4"/>
                        </video> */}
                            <div>
                                <iframe className='w-100' min-height="200px" src="https://www.youtube.com/embed/8hly31xKli0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default RecomandedJob;