import React from 'react'
import playLinkIcon from './play-icon.png'

export default function PlayLink(props) {
    return (
    <div className='play-link link-tab'>
        <a href={props.href} target="_blank" rel="noopener noreferrer">
                
            <img src={playLinkIcon} className="play-link-img" alt="Play Link"></img>
        
        </a>
    </div>

    )
}
