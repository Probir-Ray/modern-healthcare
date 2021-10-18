import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div>
        <Navbar bg="primary" variant="dark" sticky='top' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Modern Healthcare</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                { user?.email ? 
                    <button onClick={logout} className="btn btn-light">Logout</button> :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                <Navbar.Text>
                    &nbsp;&nbsp;Signed in as: <a href="#login">{user?.displayName}</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;