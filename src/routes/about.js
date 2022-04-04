import React from "react";
import { Container, Row, Imag, Col } from "react-bootstrap";
import headshotImg from '../images/kestner.jpg'
export default function About() {
    return(
        <div>
           <Container fluid="md" >
                <Row>
                    <Col className="aboutImg">
                        <img className="headshotImg" src={headshotImg}></img>
                    </Col>
                    <Col className="aboutTxt">
                    <p>
                    Hey! This section is all about ME! Thanks for taking the time to take a look. My name is Zachary Kestner and I live in Lexington, KY but I come from Eastern Kentucky. 
                    As beautiful the Appalachian mountains can be, the opportunities are very lacking. 
                    So I am very grateful for where I am currently within my life. I have a love for technology and been interested for most of my life. Before starting the bootcamp, mainly my experience with technology has been hardware related. 
                    I've built my own computer and a few others as a hobby which eventually lead me to pursue Web Development. I am on a Journey to become a Web Developer via the Awesome Inc, Bootcamp. 
                    Feel free to keep an eye out on my journey as I progress through the bootcamp and even once I hopefully become a Web Developer!
                    </p>
                    </Col>
                </Row>
               </Container> 
        </div>
    );
}