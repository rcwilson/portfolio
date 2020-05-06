import React from 'react'
import './Skills.scss'
import ContentContainer from './ContentContainer'

export default function Skills() {

    let allCards = document.querySelectorAll('.skill-card')
    let currentCard = ""

    function clickCard(cardName){
        const newCard = document.querySelector("."+cardName)
        if(currentCard === newCard){
            currentCard.classList.toggle("flipped")
        } else {
            // allCards.forEach(card=>{
            //     card.classList.remove("flipped")
            // })
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
        },1500)
    }

    onLoad()

    return (

        <div className="skill-cards-container">

            <div className="skill-card design unselected" onClick={()=>{clickCard("design")}}>
            <header className="title">Full Stack</header>
                <div className="face front">
                    <div className="skill-card__content">
                        <header>F R O N T - E N D</header>
                        <div>Languages & Tools </div> 
                            <span>JavaScript</span>
                            <span>ReactJS</span>
                            <span>React Hooks</span>
                            <span>HTML5/CSS3</span>
                            <span>Flex + Grid</span>
                            <span>WebPack</span>
                            <span>Handlebars</span>
                            <span>Sass</span>
                            <span>JAM Stack</span>  
                        
                    </div>
                </div>
                <div className="face back">
                    <div className="skill-card__content">
                    <header>B A C K - E N D</header>
                        <div>Skillset & Tools </div> 
                            <span>NodeJs</span>
                            <span>GitHub / GitBash</span>
                            <span>JSON</span>
                            <span>SQL / Sequelize</span>
                            <span>MongoDB / Mongoose</span>
                            <span>Model View Controller</span>
                            <span>Express</span>
                            <span>Content Management Systems</span>
                            <span>WebPack</span>
                            <span>Single Page Applications</span>  
                            <span>APIs</span>
                        
                    </div>

                </div>
            </div>

            <div className="skill-card unselected experience" onClick={()=>{clickCard("experience")}}>
                <header className="title">Methods</header>
                <div className="face front">
                    <div className="skill-card__content">
                        <header>E X P E R I E N C E</header>
                        <div>Frameworks </div> 
                                <span>Agile</span>
                                <span>Scrum</span>
                                <span>Test Driven Design</span>
                                <span>Pair Programming</span>
                                <span>Mob Programming</span>
                    </div>
                </div>
                <div className="face back">
                    <div className="skill-card__content">
                        <header>T E C H N I C A L</header>
                        <div>Coding Inventory</div> 
                                <span>Object Oriented Programming</span>
                                <span>AJAX</span>
                                <span>Shell / Bash</span>
                                <span>Visual Basic Application</span>
                                <span>Responsive Design</span>
                                <span>Clean Code / Refactoring</span>
                    </div>
                </div>
            </div>

            <div className="skill-card unselected fortitude" onClick={()=>{clickCard("fortitude")}}>
                <header className="title">Fortitude</header>
                <div className="face front">
                    <div className="skill-card__content">
                        <header>S T R E N G T H S</header>
                        <div>Summary </div> 
                                <span>UX / UI</span>
                                <span>Front-End Design</span>
                                <span>Client Interaction</span>
                                <span>Team Communication</span>
                                <span>Project Organization</span>
                    </div>
                </div>
                <div className="face back">
                    <div className="skill-card__content">
                        <header>G R O W T H S</header>
                        <div>and future endeavors</div> 
                            <span>AWS</span>
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
