import React from 'react'
import './App.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';



export default class Navigator extends React.Component{

    render(){

        return(
            <div>
                <Navbar bg="light" expand="xl" className="main-navigation">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#link" style={{color:"#013C71", fontWeight: "700", fontSize: 15, marginLeft:25}}>CONTACT</Nav.Link>   
                        <Nav.Link href="#link" style={{color:"#013C71", fontWeight: "700", fontSize: 15, marginLeft:25}}>ABOUT</Nav.Link>   
                        <Nav.Link href="https://github.com/Barak-S/NCHS-Project" style={{color:"#013C71", fontWeight: "700", fontSize: 15, marginLeft:25}}>GITHUB</Nav.Link>   
                    </Nav>
                    <div style={{marginRight: "13.5%"}}>
                    <Form inline>
                    </Form>
                    </div>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}