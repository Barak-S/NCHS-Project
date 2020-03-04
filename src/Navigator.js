import React from 'react'
import './App.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';



export default class Navigator extends React.Component{

    render(){

        return(
            <div>
                <Navbar bg="light" expand="lg" className="main-navigation">
                <Navbar.Brand href="#home">
                    <img src="https://s3-prod.modernhealthcare.com/s3fs-public/inline-images/Crossix_Logo.png" style={{height: 30, paddingLeft: 290, paddingRight: 100}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={{color:"#191970", fontWeight: "600", fontSize: 15}}>ABOUT US</Nav.Link>
                        <Nav.Link href="#link" style={{color:"#191970", fontWeight: "600", fontSize: 15}}>WHY CROSSIX</Nav.Link>
                        <Nav.Link href="#link" style={{color:"#191970", fontWeight: "600", fontSize: 15}}>SOLUTIONS</Nav.Link>
                        <Nav.Link href="#link" style={{color:"#191970", fontWeight: "600", fontSize: 15}}>NEWS AND EVENTS</Nav.Link>
                        <Nav.Link href="#link" style={{color:"#191970", fontWeight: "600", fontSize: 15}}>CAREERS</Nav.Link>
                        <Nav.Link href="#link" style={{color:"#191970", fontWeight: "600", fontSize: 15}}>CONTACT US</Nav.Link>   
                    </Nav>
                    <div style={{paddingRight: 290}}>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{color:"#191970"}} />
                    <Button variant="outline-success" style={{color:"#191970"}}>Search</Button>
                    </Form>
                    </div>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}