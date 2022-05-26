import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Container,Card, Button } from "react-bootstrap";
import weatherImg from '../images/weather.png';
import finalImg from '../images/Finalproject.png';
import todoImg from '../images/todolist.png';
import tictactoeImg from '../images/tictactoe.png';
import restaurantImg from '../images/reactrestaurant.png';

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
                        <Card.Img variant="top" src={finalImg} />
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
                        <Card.Img variant="top" src={restaurantImg} />
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
                        <Card.Img variant="top" src={tictactoeImg} />
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
                        <Card.Img variant="top" src={todoImg} />
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
                        <Card.Img variant="top" src={weatherImg} />
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