import React from "react";
import { Container, Row, Image, Card, Button } from "react-bootstrap";

export default function Blog() {
    return(
        <div>
           <Container fluid>
            <h2> Week 1</h2>
            <p> 
                <details>
                    <summary>Was your first week what you expected? Why? Why not?</summary>
                    I can say this first week was different than what I expected. 
                    Jumping into learning Github was interesting and even confusing at times. 
                    Although the workflow of being able to separate your changes and review them does seem like something that would be very useful in a work or even learning environment. 
                </details>
                
                <details>
                    <summary>What are you excited or eager to learn more about?</summary>
                    I think what I am most eager to learn more about is how this all connects together. 
                    The most exciting part about learning is getting to the point where everything just comes together finally. 
                    This doesn't mean the journey there isn't as important but learning about Github has given me a glimpse into part of the workflow that would be expected. 
                    So I look forward how this connects with other aspects of coding that we plan to learn.
                </details>

                <details>
                    <summary>What is something about you that can only be learned by reading this blog?</summary>
                    Well to start, I've never written a blog about myself before. I wouldn't call myself a private person but I usually only share with people that I am close with but there is a first time for everything! 
                    My Name is Zachary Kestner but I go by either Zac or Kestner. A lot of the time it's Kestner due to the amount of other Zac's I've encountered in my life. 
                    I'm going by Kestner in this bootcamp for the same reason but honestly kinda prefer being called Kestner. 
                    I went by Kestner all of my high school life since there was 3 other Zac's in my graduating class of only 49 people. Funny enough, one of them even had the same birthday as me.
                </details>
            </p>
               </Container>

               <Container fluid>
                    <h2> Week 2</h2>
                    <p>
                        <details>
                            <summary>What is something you wish you could do but currently do not have the coding skills to accomplish?</summary>
                        I try to not get ahead of myself but it would be great to be able to build from scratch without feeling the need to relay heavily on learning material. 
                        I know that is something that I will get the hang of with time and part of the learning experience.
                        </details>
                        
                        <details>
                            <summary>What are you struggling with?</summary>
                        Github was more of a struggle than the Html structure that we learned this week. 
                        Although some aspects of the CSS I am still unfamiliar with but it is starting to come together. 
                        I believe my biggest struggle will be next week once we actually dive deeper into Javascript but looking forward to tackling it deeper than what grasshopper shows you.
                        </details>

                        
                        <details>
                            <summary>How do you solve a problem? </summary>
                        Trial and Error is how I attempt to resolve most problems. Such as the issue I experienced with code that was working in Gitpod but not in GitHub. 
                        Running through it again and attmepting changes based on review of resources lead me to resolving the issue. 
                        Which I believe in the future that Devtool will be a very helpful thing to use and to try quick changes to attempt to resolve issues as well.
                        </details>

                        <details>
                            <summary>What methods do you use to help yourself get unstuck?</summary>
                        Aside from the Trial and Error option that I mention previously. 
                        Talking myself through it again to see if there is anything I missed or anything that clicks from the resources that didn't previously. 
                        Kinda similar to the Rubber Ducky Method that the training references as well.
                        </details>
                    </p>
               </Container>

               <Container fluid>
                   <h2>Week 3 & 4</h2>
                   <p>
                       <details>
                           <summary>What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and providing a user experience?</summary>
                           It was really interesting to discover the different roles that HTML, CSS and JavaScript play in creating content for users. 
                           It's cool to have all these different things independently of each other, but also to serve its purpose. 
                           It's similar to like HTML being a Canvas for these other roles to add more Style or Functionality as needed. 
                           These layers of abstraction allow for more depth for the user experience on a website. 
                           I look forward to learning even more about these roles and any other roles as I progress along this coding journey!
                       </details>
                   </p>
               </Container>
        </div>
    );
}