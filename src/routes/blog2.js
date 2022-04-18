import React from "react";
import { Container, Row, Image, Card, Button } from "react-bootstrap";

export default function Blog2() {
    return(
        <div>
           <Container fluid>
            <h2> Week 5</h2>
            <p> 
                <details>
                    <summary>What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures), Bootstrap, or Atomic Design?</summary>
                    I would most likely want to learn more about JSON. Having the option to store your data via another file to access it seems very useful and possibly even a best practice. 
                </details>
                
                <details>
                    <summary>How does In-Person Bootcamp compare to Remote Onboarding?</summary>
                    The experience so far has been very exciting and nice to meet everyone, including the second remote group that we did not get to interact with. 
                    It is harder to get a feel from short interactions via Remote Onboarding compared to spending basically a full work week of time with others via In-Person. 
                    It's always nice to get to do stuff on your own time from your home, but I glad that this experience will be In-Person. 
                    I look forward to sharing this journey with my fellow Bootcampers.
                </details>

                <details>
                    <summary>What is your “Why”?</summary>
                    The easy answer to this question would be to get a Job. Which I believe is the Ultimate goal of just about everyone in this bootcamp. 
                    If I was to really think as to why this type of Job or why quit my Job to take a chance on this? I believe it comes from my interest in Technology. 
                    I've been interested in anything technology related as long as I can remember. Having a Career path in Technology and to build things is something that I've wanted for a long time. 
                    Which isn't something I had the opportunity to do while I lived in Eastern Kentucky. My options for a career path was extremely limited, but eventually lead to me here. 
                </details>
            </p>
               </Container>

               <Container fluid>
                    <h2> Week 6</h2>
                    <p>
                        <details>
                            <summary>What did you learn about that helped you understand the development process?</summary>
                            The introduction of API's and the use of data within an website/app that we created helped me understand that you have a lot of different working parts to an overall whole product. 
                        </details>
                        
                        <details>
                            <summary>What does it mean to develop good code?</summary>
                            I belive that good code is easily readable and clean. 
                            It should have good naming for your future self/other developers that needs to read your code. 
                            The last thing you want is either your or someone else to comeback to your code in the future and being unable to read any of it. 
                            At that point, you may have to put more work into something that should have been clear in the first place.
                        </details>

                        
                        <details>
                            <summary>What does it mean to be a good developer? </summary>
                            Someone that is always improving and learning while also writing code to be clean/readable for themself and others. 
                            As a developer you want to constantly be learning since the field seems to be constantly changing.
                        </details>

                        <details>
                            <summary>What is one thing that programmers hate doing?</summary>
                            WET code - Write Everything Twice, unless you enjoy typing. For the most part is seems to be best practice to keep your code DRY - Don’t Repeat Yourself. 
                            Mainly it can reduce your chance for errors as well.
                        </details>
                    </p>
               </Container>

               <Container fluid>
                   <h2>Week 7</h2>
                   <p>
                       <details>
                           <summary>What is Pseudocode and why bother with it?</summary>
                           When you start coding, you soon realise that you have a very big problem to solve/ build without any instructions. It's similar to getting a brand new piece of furniture that has tons of pieces. 
                           At first, you may think about some of the parts you have to assemble. The issue is when you actually start to put them together! You suddenly realize that you don't know where a specific piece goes or even the purposes for them. 
                           Having instructions before starting helps you prepare yourself before and during this process. With coding, you usually don't get these instructions given to you... this is where Pseudocode comes in. 
                           This is where you get to create/think exactly what instructions you need to put this project together. 
                           Once you finish your Pseuocode, it may not even be finished once you jump into coding, but it will allow you to have enough instruction laid out to get started. 
                           You will be able to think about all the possible reusable pieces of code that is required for your project. You can describe what you need each piece to do and how you plan to use them. 
                           This will allow you to mostly focus on how to code these specific parts of the project instead of trying to juggle both the logic of how to use it and how to code it. 
                           Eventually you may have built a type of furniture so many times that you can do it blindfolded. Although at some point there may be a certain change with how that piece of furniture is being built. 
                           Which is something that can easily change with coding due to the ever change nature of the Tech field. Which you will most likely find yourself needing instructions again. When you do, you'll wish you had your Pseudocode ready to go.
                       </details>
                   </p>
               </Container>

               <Container fluid>
                   <h2>Week 8</h2>
                   <details>
                       <summary>Do you think JavaScript Frameworks and Libraries are easy or hard to use?</summary>
                       I imagine it could vary based on the Framework/Library that you are trying to use. 
                       Although using React, it seems like an easy way to write both Javascript and HTML together in a clean and a component base structure. 
                       It would be intresting to learn if any other Framework or Libraries are harder to implement, if so then why. 
                   </details>

                   <details>
                       <summary>What Frameworks or Libraries are you interested in learning more about?</summary>
                       Anime.js seems like an intresting library to look into because the name peaked my intrest mostly. 
                       Although it looks like it could even be pretty useful with adding animation to a site. 
                       Framework wise, I would like to learn more into Node.js since it is something that I have seen around the web a bit but don't fully understand what it does currently. 
                   </details>

                   <details>
                       <summary>Find one emerging JavaScript tool that you would like to learn more about or use in your final project.</summary>
                       One javascript tool that I would like to dive deepr into or even use would be Parcel. 
                       It seems to provide a lot of usefulness during building and after. Mainly intrested in what it can do optimization wise for your build and how excatly it does that automatically. 
                   </details>
               </Container>
        </div>
    );
}