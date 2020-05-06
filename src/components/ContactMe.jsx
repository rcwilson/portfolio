import React from 'react'
import ContentContainer from './ContentContainer'
import './ContactMe.scss'

import mailLogo from '../images/icons/email.png'
import linkedInLogo from '../images/icons/linkedin.png'
import gitHubLogo from '../images/icons/gitHub.png'
import copyIcon from '../images/icons/status.gif'

function Email(){

    return(
        <>
        Email me at <a href="mailto:rcwilson88@gmail.com">rcwilson88@gmail.com</a>
        <p>Or <img src={copyIcon}></img> to copy the address.

        </p>
        </>
    )
}


export default function Contactme() {
    const initialContent = <>Email me, connect with me on LinkedIn, and/or follow me on GitHub</>
    const [content, setContent] = React.useState(initialContent)

    function setToEmail(){
        setContent(<Email />)
    }


    return (

        <ContentContainer header="Let's Chat">
            <header className="link-icons">
            <img src={mailLogo} onClick={setToEmail}></img>
            <img src={linkedInLogo}></img>
            <img src={gitHubLogo}></img>
            </header>
            <section className="contact-me-content">
                {content}
            </section>
        </ContentContainer>
    )
}
