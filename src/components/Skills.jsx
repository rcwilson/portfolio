import React from 'react'
import './Skills.scss'

export default function Skills() {

    let currentCard = ""

    function clickCard(cardName){
        const newCard = document.querySelector("."+cardName)
        if(currentCard === newCard){
            currentCard.classList.toggle("flipped")
        } else {
            
            if(currentCard){
                currentCard.classList.remove("flipped")
                currentCard.classList.add("unselected")
                currentCard.classList.remove("selected")
            }
            currentCard = newCard
            newCard.classList.add("selected")
            newCard.classList.remove("unselected")
        }     
    }

    function onLoad(){
        setTimeout(()=>{
            clickCard("design")
        }, 1100)
        setTimeout(()=>{
            currentCard.classList.toggle("flipped")
        },1750)
    }

    onLoad()

    return (

        <div className="skill-cards-container">

            <div className="skill-card design unselected" onClick={()=>{clickCard("design")}}>
            <header className="title">Full Stack</header>
                <div className="face back">
                    <div className="skill-card__content">
                        <header>F R O N T - E N D</header>
                        <span>JavaScript</span>
                        <span>HTML5/CSS3</span>
                        <span>React</span>
                        <span>JQuery</span>
                        <span>Bootstrap</span>
                        <span>Handlebars</span>
                        <span>WebPack</span>
                        <span>Sass</span>
                        <span>Responsive Design</span>  
                        <span>View Templating</span>  
                    </div>
                </div>
                <div className="face front">
                    <div className="skill-card__content">
                        <header>B A C K - E N D</header>
                        <span>PHP</span>
                        <span>AWS</span>
                        <span>SQL / Sequelize</span>
                        <span>MongoDB / Mongoose</span>
                        <span>NodeJs</span>
                        <span>Express</span>
                        <span>JSON</span>
                        <span>Content Management Systems</span>
                        <span>WebPack</span>
                        <span>Single Page Applications</span>  
                        <span>REST APIs</span>
                    </div>
                </div>
            </div>

            <div className="skill-card unselected experience" onClick={()=>{clickCard("experience")}}>
                <header className="title">Workflow</header>
                <div className="face front">
                    <div className="skill-card__content">
                        <header>W O R K F L O W</header>
                        <span>Agile</span>
                        <span>Jira / Scrum</span>
                        <span>Git + Version Control</span>
                        <span>Test Driven Design</span>
                        <span>Paired Programming</span>
                        <span>Sprint Planning</span>
                        <span>Code Review</span>
                    </div>
                </div>
                <div className="face back">
                    <div className="skill-card__content">
                        <header>T E C H N I C A L</header>
                        <span>Object Oriented Programming</span>
                        <span>AJAX</span>
                        <span>Shell / Bash</span>
                        <span>SSH / SFTP</span>
                        <span>Visual Basic Application (VBA)</span>
                        <span>Responsive Design</span>
                        <span>Readable, Reusable Code</span>
                    </div>
                </div>
            </div>

            <div className="skill-card unselected fortitude" onClick={()=>{clickCard("fortitude")}}>
                <header className="title">Fortitude</header>
                <div className="face front">
                    <div className="skill-card__content">
                        <header>S T R E N G T H S</header>
                        <span>UX / UI</span>
                        <span>Front-End Design</span>
                        <span>Client Interaction</span>
                        <span>Meeting Business Expectations</span>
                        <span>Team Communication</span>
                        <span>Project Organization</span>
                    </div>
                </div>
                <div className="face back">
                    <div className="skill-card__content">
                        <header>N E X T</header>
                        <span>JAVA</span>
                        <span>Spring</span>
                        <span>Python</span>
                        <span>React Native</span>
                        <span>Raspberry Pi</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
