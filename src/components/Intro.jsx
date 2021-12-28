import React from 'react'
import './Intro.scss'
import door from '../images/Door.png'
import WelcomeIntro from './Welcome'



export default function Intro(props) {

    const [content, setContent] = React.useState(<DoorIntro />)

    function handleDoorClick(){
        const doorImg= document.querySelector('.intro-door-container')

        doorImg.classList.add('selected')
        setTimeout(()=>{
            setContent(<WelcomeIntro />)
            props.navBar()
            document.querySelector('.navbar-button').classList.remove("hide")
        },6680)

    }

    function DoorIntro() {

        return (

            <div className="intro-door-container">
                <img src={door} alt="Welcome door" onClick={handleDoorClick}></img>
                <div className="door-text">
                    <span>W</span>
                    <span>E</span>
                    <span>L</span>
                    <span>C</span>
                    <span>O</span>
                    <span>M</span>
                    <span>E</span>
                </div>
            </div>
        )
    }



    return (
        <>{content}</>
    )

}
