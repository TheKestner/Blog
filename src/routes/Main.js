import React from "react";
import { Container } from "react-bootstrap";
import background from '../images/background.jpg'

export default function Main() {

    // const myStyle={
    //     backgroundImage: `url(${background})`,
    //     marginTop:'-60px',
    //     height:'100vh',
    //     fontSize:'50px',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // };

    return (
    <div>
        <div>
            <div className="mt-5 text-center hero"> 
                <h1>Zachary Kestner</h1>
                <h2 className="lead"> Full Stack Web Developer</h2>
            </div>
        </div>
    </div>      
    );
  }