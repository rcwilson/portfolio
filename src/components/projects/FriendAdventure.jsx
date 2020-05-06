import React from 'react'

import imgFriendAdventure1 from '../../images/project/friendventure/friendventure-1.JPG'
import imgFriendAdventure2 from '../../images/project/friendventure/friendventure-2.JPG'
import imgFriendAdventure3 from '../../images/project/friendventure/friendventure-3.JPG'


export default function FriendAdventure(props) {
    return (
        <>
<section className="summary">
<p>
A Choose-Your-Own-Adventure game that will result 
in a friend date certificate with yours truly!
</p>
<p>
Choice paths are stored in LocalStorage so you can continue where you left off. 
Every decision directly affects the activities on the certificate.    
</p>
<i>In Progress</i>
</section>
<section className="thumbnail-slides">
    <img alt="Friend Adventure Pic 1" src={imgFriendAdventure1} onMouseEnter={props.addImageToolTip} onMouseLeave={props.clearImageToolTip}></img>
    <img alt="Friend Adventure Pic 2" src={imgFriendAdventure2} onMouseEnter={props.addImageToolTip} onMouseLeave={props.clearImageToolTip}></img>
    <img alt="Friend Adventure Pic 3" src={imgFriendAdventure3} onMouseEnter={props.addImageToolTip} onMouseLeave={props.clearImageToolTip}></img>
</section>
<section className="tools-used">
    <span>NodeJs</span>
    <span>ReactJs</span>
    <span>WebPack</span>
    <span>HTML5</span>
    <span>CSS3</span>
    <span>Github</span>
    <span>React Hooks</span>
    <span>SPA</span>
    <span>JSON</span>
    <span>LocalStorage</span>
    <span>Responsive Design</span>
</section>
        </>
   
    )
}
