import React from 'react'
import { Container, Col, Row, Image, Card } from 'react-bootstrap';

import './App.css';

export default function Contact(){
    return(
        <div className="contact">
            <Card style={{ margin: "3%", }}>
                <Card.Header style={{color: "#013C71", fontSize: 17, paddingBottom: 8, fontWeight: "700", }}>Contact</Card.Header>
                <Card.Body>
                    <div>
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                <Image src="../headshot.png" thumbnail />
                                </Col>
                            </Row>
                        </Container>
                        <Card.Title>Barak Saidoff</Card.Title>
                        <Card.Text>Full Stack Software Developer</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}