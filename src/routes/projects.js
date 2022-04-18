import React from "react";
import { CardGroup } from "react-bootstrap";
import { Container, Row, Image, Card, Button } from "react-bootstrap";

export default function Projects() {
    return(
        <div>
           <Container fluid>
                <Row>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Week 1</Card.Title>
                        <Card.Text>
                         Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Week 1</Button>
                    </Card.Body>
                </Card> 
                </Row>
               </Container> 
        </div>
    );
}