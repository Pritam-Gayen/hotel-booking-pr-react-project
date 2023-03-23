import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TopBar.css';

const TopBar = () => {
    
    return (
        <Navbar sticky="top" className="blue-bg shadow-bottom" collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>Hotel-Booking</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav >
                        <a className='nav-link' href='https://www.google.com/'>Search destination</a>
                        <a className='nav-link' href='https://www.google.com/'>Hotels</a>
                        <a className='nav-link' href='https://www.google.com/'>Flights</a>
                        <a className='nav-link' href='https://www.google.com/' >User</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopBar