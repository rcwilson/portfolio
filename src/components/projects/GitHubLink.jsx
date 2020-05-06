import React from 'react'
import gitHubIcon from './gitHubIcon.png'

export default function GitHubLink(props) {
    return (
    <div className='github-link link-tab'>
        <a href={props.href} target="_blank" rel="noopener noreferrer">
                
            <img src={gitHubIcon}  alt="Github Link"></img>
        
        </a>
    </div>

    )
}
