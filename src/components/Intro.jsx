import React from 'react'
import ContentContainer from './ContentContainer'
import './Intro.scss'
import headshot from '../images/headshot/headshot_cropped.jpg'

export default function Intro() {
    return (

        <ContentContainer header="Welcome">
            <img src={headshot} className="headshot"></img>
            <p>You made it!</p>
            <p>Thanks for visiting my page, visitor!</p>
            <p>
                About Me is a great place to start.
                Projects showcase my recent works.
                Perhaps look at my knowlege and Skills!
                Then, if you want to chat, Contact Me.
            </p>
        </ContentContainer>
    )
}
