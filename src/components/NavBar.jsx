import React from "react"
import {Nav, Navbar, NavDropdown, Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'


const NavBar = () => {
    return (
       
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">something</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Courses Description" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">4000xlevel</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">5000xlevel</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">6000xlevel</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
</div>
    )
}

export default NavBar