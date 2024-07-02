import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


const Header =()=>{
    return(
        <>
              {/* Start Header */}
                <Row>
                    <Col sm={12}>
                    <Navbar bg="primary">
                        <Container>
                        <Link to={"/"}>
                        <Navbar.Brand to="#" className="navbar-logo">Navbar</Navbar.Brand>
                        </Link>
                       

                        <Nav className="me-auto">
                        <Link to={"#"}>
                        <Nav.Link href="#home" className="navbar-text">Props</Nav.Link>
                        </Link>
                      
                            <Nav.Link href="#features" className="navbar-text">Features</Nav.Link>
                            <Nav.Link href="#pricing" className="navbar-text">Pricing</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                    </Col>
                </Row>
                {/* End Header */}
        </>
    )
}

export default Header