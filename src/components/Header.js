import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import '../style/header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
            <Navbar className="navbar navbar-expand-md custom-nav fixed-top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* <button class="navbar-toggler collapsed btn menu-button" id="menu" type="button" data-toggle="collapse" data-target="#menuMobileButton" aria-controls="#menuMobileButton" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="sr-only">Toggle navigation</span>
                    <i class="fas fa-bars"></i>
                </button> */}
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Work</Nav.Link>
                        <Nav.Link href="#timeline">Timeline</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
}

export default Header;