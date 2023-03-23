import React, {Component} from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
                <header>
                    <Navbar bg="dark" variant="dark">
                        <Container className="justify-content-start">
                            <Navbar.Brand href="#">Home</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/listVehicles">Vehicle Lists</Nav.Link>
                                <Nav.Link href="/listDrivers">Drivers</Nav.Link>
                                <Nav.Link href="/listRoutes">Our Routes</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;