import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavTab() {
    return (
        <div>
            <Navbar bg="light" variant="light" >
                <Container>
                    <Navbar.Brand className= 'brand'href="#home">My Portfolio</Navbar.Brand>
                    <Nav className="navLinks">
                        <ul className='navbar'>
                            <li > <Link to="/">Home</Link></li>
                            <li > <Link to="/products">Products</Link></li>
                            <li > <Link to="/aboutme">About Me</Link></li>
                        </ul>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default NavTab