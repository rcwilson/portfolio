import React from 'react'

import img1 from '../../images/project/blackjack/blackjack-1.JPG'
import img2 from '../../images/project/blackjack/blackjack-2.JPG'

export default function Blackjack(props) {
   
    return (
        <>
        <section className="summary">
        <p>
        A Blackjack game with style!
        </p>
        <p>
        My first take on an actual front-end application using vanilla JavaScript.
        This project gave me incredible clarity on what Webpack does, various ways to
         use CSS, and the power of JavaScript DOM manipulation.
        </p>
        </section>
        <section className="thumbnail-slides">
    <img alt="Screenshot 1" src={img1} onMouseEnter={props.addImageToolTip} onMouseLeave={props.clearImageToolTip}></img>
    <img alt="Screenshot 2" src={img2} onMouseEnter={props.addImageToolTip} onMouseLeave={props.clearImageToolTip}></img>
    </section>
        <section className="tools-used">
    <span>NodeJs</span>
    <span>Express</span>
    <span>WebPack</span>
    <span>HTML5</span>
    <span>CSS3</span>
    <span>Github</span>
    <span>Blackjack Logic Package</span>
        </section>
        </>
   
    )
}
