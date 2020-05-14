import React from 'react'
import ContentContainer from './ContentContainer'
import resume from './resume/Resume-public.pdf'
import resumeImg from './resume/Resume-public.png'
import './Resume.scss'

export default function Resume() {
    return (
        <ContentContainer>
        <a href={resume} target="_blank" className="resume-link">
            <img className="resume-thumbnail" src={resumeImg}></img>
        </a>
        </ContentContainer>
    )
}

