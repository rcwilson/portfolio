import React from 'react'
import './NavBubble.scss'

export default function NavBubble(props) {
  let touch = false
  if(("ontouchstart" in document.getElementById("root"))){
    touch = true  
  }

    return (
        <div className={`nav-bubble show ${props.position} ${props.linkName} touch-${touch}`} 
          id={`link${props.number}`} 
          onClick={props.onClick}>
            {props.children}
        </div>
    )
}
