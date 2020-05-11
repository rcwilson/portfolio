import React from 'react'
import ContentContainer from './ContentContainer'
import './ContactMe.scss'

import mailLogo from '../images/icons/email.png'
import linkedInLogo from '../images/icons/linkedin.png'
import gitHubLogo from '../images/icons/gitHub.png'
import copyIcon from '../images/icons/copy.png'

function Email(){
    function copyEmail(){
        const email = document.createElement("input")
        const emailLink = document.querySelector(".copy-icon")
        emailLink.classList.add("clicked")
        email.value = "rcwilson88@gmail.com"
        document.body.appendChild(email)
        email.select()
        document.execCommand("copy")
        document.body.removeChild(email)
        setTimeout(()=>{
            emailLink.classList.remove("clicked")
        }, 1800)
    }
    return(
        
        <div className="contact-me-info">
        Email me at: <a alt="Copy Email" id="email" href="mailto:rcwilson88@gmail.com">rcwilson88@gmail.com</a>
        <section>
            <hr></hr>
            <div className="copy-icon" onClick={copyEmail}>
                <img alt="Copy Email Icon" src={copyIcon}></img>
            </div> or click to copy address.
        </section>

        </div>
        
    )
}
function LinkedIn(){

    return (
        <div className="contact-me-info">
        <header>Connect with me on LinkedIn:</header>
        <a href="https://www.linkedin.com/in/richard-wilson-c/"
         target="_blank" rel="noopener noreferrer">
             /richard-wilson-c/</a>
        </div>
    )
}

function GitHub(){
    return (
        <div className="contact-me-info">
        <header>GitHub Repo:</header>
        <a href="https://github.com/rcwilson"
         target="_blank" rel="noopener noreferrer">
             https://github.com/rcwilson</a>
        </div>
    )
}


export default function Contactme() {
    const initialContent = <>Let's talk! Click one of the above icons for more info.</>
    const [content, setContent] = React.useState(initialContent)

    function setToEmail(){
        setContent(<Email />)
    }
    function setToLinkedIn(){
        setContent(<LinkedIn />)
    }
    function setToGitHub(){
        setContent(<GitHub />)
    }


    return (

        <ContentContainer header="Connect" styleMod="contact">
            <header className="link-icons">
            <img alt="Email Me" src={mailLogo} onClick={setToEmail}></img>
            <img alt="LinkedIn Profile" src={linkedInLogo} onClick={setToLinkedIn}></img>
            <img alt="GitHub Repo" src={gitHubLogo} onClick={setToGitHub}></img>
            </header>
            <section className="contact-me-content">
                {content}
            </section>
        </ContentContainer>
    )
}
