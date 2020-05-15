import React from 'react'
import ContentContainer from './ContentContainer'
import './Credits.scss'

export default function Credits(){
    return (

        <ContentContainer styleMod="about">
            <section className="credits-container">
            <div className="credits-content">
                <span>Made with Create-React-App and Sass</span>
                <span>Coded in VS Code</span>
                <span>Hosted by Netlify</span>
                <header>Icon credits</header>
                <span>Wrench Icon: icons8.com</span>
                <span>Play Icon: iconfinder.com -P.J. Onori</span>
                <span>Email Icon: Me</span>
                <header>Special Thanks</header>
                <span>We Can Code It Staff & Peers</span>
                <span>StackOverflow contributors</span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>And YOU for viewing my page</span>
            </div>
            </section>

            
        </ContentContainer>
    )
}
