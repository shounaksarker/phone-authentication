import React from 'react';
import logo from '../../imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./header.css"
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const plus = <FontAwesomeIcon icon={'plus'} />

    return (
        <div className="header mb-4 mb-md-0 mb-lg-0 mb-xl-0">

            <Navbar expand="lg">
                <Navbar.Brand>
                    <Link to="/">
                        <img src={logo} alt='logo' className="navbar-brand logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto mx-auto mb-2 mb-lg-0">
                        <Nav.Link href="#home" className="mr-5" style={{ fontWeight: 'bold', color: '#E44159' }}><span className="plus-btn">{plus}</span> Post Job</Nav.Link>
                        <Nav.Link href="#link" className="mr-5">Browse Jobs</Nav.Link>
                        <Nav.Link href="#link">Categories</Nav.Link>
                    </Nav>
                    <div className="auth d-flex">
                        <Link to="/auth" className="nav-link" >Signup</Link>
                        <Link to='/auth' className="nav-link" >Log in</Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;

