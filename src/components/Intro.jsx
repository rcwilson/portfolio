import React from 'react'
import ContentContainer from './ContentContainer'
import './Intro.scss'
import door from '../images/Door.png'

export default function Intro(props) {

    const [content, setContent] = React.useState(<DoorIntro />)

    function handleDoorClick(){
        const doorImg= document.querySelector('.intro-door-container')

        doorImg.classList.add('selected')
        setTimeout(()=>{
            setContent(<WelcomeIntro />)
            props.navBar()
            document.querySelector('.navbar-button').classList.remove("hide")
            document.querySelector('.navbar-mobile').classList.remove("disable")
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

    function WelcomeIntro() {
        return (
            <ContentContainer header="Greetings" styleMod="about">
                <h1 className="intro-header">Welcome to my adventure, visitor!</h1>
                <table className="intro-map">
                    <tbody>
                        <tr>
                            <td>Projects</td>
                            <td>Showcases my recent works</td>
                        </tr>
                        <tr>
                            <td>Skills</td>
                            <td>View my experience and tools</td>
                        </tr>
                        <tr>
                            <td>Resume</td>
                            <td>Preview and download my Resume</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>Email, Social Media, and GitHub</td>
                        </tr>
                        <tr>
                            <td>About Me</td>
                            <td>Read about my adventure, destination, and hobbies</td>
                        </tr>
                        <tr>
                            <td>Credits</td>
                            <td>Tools used and asset attributes</td>
                        </tr>
                    </tbody>
                </table>
            </ContentContainer>
        )
    }

    return (
        <>{content}</>
    )

}
