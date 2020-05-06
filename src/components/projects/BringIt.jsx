import React from 'react'

import imgBringIt1 from '../../images/project/bring-it/bring-it-1.JPG'
import imgBringIt2 from '../../images/project/bring-it/bring-it-2.JPG'

export default function BringIt(props) {
   
    return (
        <>
        <section className="summary">
        <p>The ultimate party planner! Users can log in and create or check an event, 
        then claim items needed or create their own. Bring it is about to be a potluck savior.
        </p>
        <p>
         The data is stored in a cloud database called Mongoose. 
         Bring It works through a custom-built API that handles the logic and management of that data.   
        </p>
        </section>
        <section className="thumbnail-slides">
    <img alt="Bring-It 1" src={imgBringIt1} onMouseEnter={props.addImageToolTip} onMouseLeave={props.clearImageToolTip}></img>
    <img alt="Bring-It 2" src={imgBringIt2} onMouseEnter={props.addImageToolTip} onMouseLeave={props.clearImageToolTip}></img>
    </section>
        <section className="tools-used">
    <span>NodeJs</span>
    <span>Express</span>
    <span>WebPack</span>
    <span>MongoDB</span>
    <span>Mongoose</span>
    <span>HTML5</span>
    <span>CSS3</span>
    <span>Github</span>
    <span>SPA</span>
    <span>JSON</span>
    <span>LocalStorage</span>
    <span>Postman</span>
        </section>
        </>
   
    )
}
