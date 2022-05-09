import React from "react";
import { CardGroup } from "react-bootstrap";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Container, Row, Image, Card, Button } from "react-bootstrap";

export default function Projects() {
    return(
        <Container fluid="md">
           <Splide aria-label="My Favorite Images"
             options={ {
                rewind: true,
                perPage: 3,
                perMove: 1,
                gap: '20px',
                pagination: false,
              } }
           >
                <SplideSlide>
                    <Card style={{ margin: 'auto' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </SplideSlide> 

                    <SplideSlide>
                    <Card style={{ margin: 'auto' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card> 
                </SplideSlide>

                <SplideSlide>
                    <Card style={{ margin: 'auto'}}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card> 
                </SplideSlide>

                <SplideSlide>
                    <Card style={{ margin: 'auto' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card> 
                </SplideSlide>

                <SplideSlide>
                    <Card style={{ margin: 'auto' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card> 
                </SplideSlide>
            </Splide>
        </Container>
    );
}