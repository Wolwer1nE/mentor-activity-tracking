import React, {useState} from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import { AppContext } from "./Libs/contextLib";


function AppNavbar(props) {
    const [isAuthenticated, userHasAuthenticated] = useState(false);

    function handleLogout() {
        userHasAuthenticated(false);
    }

    return <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
            <Navbar.Brand className="font-weight-bold text-muted">
                Scratch
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
            <Nav activeKey={window.location.pathname}>
                {isAuthenticated ? (
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                ) : (
                    <>
                        <LinkContainer to="/signup">
                            <Nav.Link>Signup</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </>
                )}

            </Nav>
        </Navbar.Collapse>
    </Navbar>
        // <Navbar bg="light" expand="lg">
        //     <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link href="/">Home</Nav.Link>
        //             <Nav.Link href="/sign-in">Sign in</Nav.Link>
        //             <Nav.Link href="/sign-up">Sign up</Nav.Link>
        //             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                 <NavDropdown.Divider />
        //                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //             </NavDropdown>
        //         </Nav>
        //         <Form inline>
        //             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        //             <Button variant="outline-success">Search</Button>
        //         </Form>
        //     </Navbar.Collapse>
        // </Navbar>
        ;
}


export default AppNavbar