import React from 'react'
import './App.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';



export default class Navigator extends React.Component{

    render(){

        return(
            <div>
                <Navbar bg="light" expand="xl" className="main-navigation">
                <Navbar.Brand href="#home">
                    <img src="https://s3-prod.modernhealthcare.com/s3fs-public/inline-images/Crossix_Logo.png" alt="crossix logo" style={{height: 30, }}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={{color:"#013C71", fontWeight: "700", fontSize: 15}}>ABOUT US</Nav.Link>
                        <Nav.Link href="#link" style={{color:"#013C71", fontWeight: "700", fontSize: 15}}>WHY CROSSIX</Nav.Link>
                        <Nav.Link href="#link" style={{color:"#013C71", fontWeight: "700", fontSize: 15}}>SOLUTIONS</Nav.Link>
                        <Nav.Link href="#link" style={{color:"#013C71", fontWeight: "700", fontSize: 15}}>NEWS AND EVENTS</Nav.Link>
                        <Nav.Link href="#link" style={{color:"#013C71", fontWeight: "700", fontSize: 15}}>CAREERS</Nav.Link>
                        <Nav.Link href="#link" style={{color:"#013C71", fontWeight: "700", fontSize: 15}}>CONTACT US</Nav.Link>   
                    </Nav>
                    <div style={{paddingRight: 50}}>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{color:"#013C71", borderRadius: 40, borderColor: "#013C71", fontSize: 19, width: "70.5%"}} />
                    </Form>
                    </div>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}