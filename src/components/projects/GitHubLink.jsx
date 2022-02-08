import React from 'react'
import gitHubIcon from '../../images/icons/gitHub_clear.png'
import './LinkStyle.scss'

export default function GitHubLink(props) {
    return (
        <a className='icon-link' href={props.href} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon}  alt="Github Link"></img>
            <span>Repo</span>
        </a>
    )
}
