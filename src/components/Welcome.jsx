import React from 'react'
import ContentContainer from './ContentContainer'
import './Welcome.scss'
import aboutIcon from '../images/icons/sims-icon.png'
import creditsIcon from '../images/icons/credits-icon.png'
import emailIcon from '../images/icons/email.png'
import gearIcon from '../images/icons/gear-icon.png'
import wrenchIcon from '../images/icons/wrench-icons8.png'
import resumeIcon from '../images/icons/resume-icon.png'

const nav = {
    get: ( name ) => {
        return document.querySelector(`.nav-bubble.${name}`);
    },
    mouseenter: ( e ) => {
        const aboutBubble = nav.get(e.currentTarget.dataset['target']);
        if(aboutBubble) aboutBubble.classList.add('hover');
    },
    mouseleave: ( e ) => {
        const aboutBubble = nav.get(e.currentTarget.dataset['target']);
        if(aboutBubble) aboutBubble.classList.remove('hover');
    },
    mouseclick: ( e ) => {
        const aboutBubble = nav.get(e.currentTarget.dataset['target']);
        if(aboutBubble) aboutBubble.click();

    }
    
}


export default function Welcome() {
    return (
        <ContentContainer header="Welcome" styleMod="about">
            <table className="intro-map">
                <tbody>
                    <tr data-target='about' onMouseEnter={nav.mouseenter} onMouseLeave={nav.mouseleave} onMouseDown={nav.mouseclick}>
                        <td className='link-name'>About Me</td>
                        <td>
                            <span className='icon'><img src={aboutIcon}></img></span>
                            A little about me, my values, and where I want to build towards.
                        </td>
                    </tr>
                    <tr data-target='resume' onMouseEnter={nav.mouseenter} onMouseLeave={nav.mouseleave} onMouseDown={nav.mouseclick}>
                        <td className='link-name'>Resume</td>
                        <td>
                            <span className='icon'><img src={resumeIcon}></img></span>
                            Preview and download my Resume
                        </td>
                    </tr>
                    <tr data-target='projects' onMouseEnter={nav.mouseenter} onMouseLeave={nav.mouseleave} onMouseDown={nav.mouseclick}>
                        <td className='link-name'>Projects</td>
                        <td>
                            <span className='icon'><img src={wrenchIcon}></img></span>
                            A showcase of my personal projects and frameworks I've tinkered with
                        </td>
                    </tr>
                    <tr data-target='skills' onMouseEnter={nav.mouseenter} onMouseLeave={nav.mouseleave} onMouseDown={nav.mouseclick}>
                        <td className='link-name'>Skills</td>
                        <td>
                            <span className='icon'><img src={gearIcon}></img></span>
                            Tech-Stack and experience
                        </td>
                    </tr>
                    <tr data-target='contact' onMouseEnter={nav.mouseenter} onMouseLeave={nav.mouseleave} onMouseDown={nav.mouseclick}>
                        <td className='link-name'>Contact</td>
                        <td>
                            <span className='icon'><img src={emailIcon}></img></span>
                            Email, Social Media, and GitHub

                        </td>
                    </tr>
                    <tr data-target='credits' onMouseEnter={nav.mouseenter} onMouseLeave={nav.mouseleave} onMouseDown={nav.mouseclick}>
                        <td className='link-name'>Credits</td>
                        <td>
                            <span className='icon'><img src={creditsIcon}></img></span>
                            Tools used and credits due

                        </td>
                    </tr>
                </tbody>
            </table>
        </ContentContainer>
        )
}
