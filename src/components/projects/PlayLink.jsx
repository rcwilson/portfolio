import React from 'react'
import playLinkIcon from './play-icon.png'
import './LinkStyle.scss';

export default function PlayLink(props) {
    return (
        <a className='icon-link' href={props.href} target="_blank" rel="noopener noreferrer">
                
            <img src={playLinkIcon} className="play-link-img" alt="Play Link"></img> <span>Demo</span>
        
        </a>

    )
}
