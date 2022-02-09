import React, { useCallback, useEffect, useRef } from 'react'
import ContentContainer from './ContentContainer'
import './Projects.scss'
import projects from '../API/projects.class.ts'
import { useState } from 'react'
import iconNext from '../images/icons/icon_next.png'
import iconPrev from '../images/icons/icon_prev.png'
import iconClose from '../images/icons/close.svg'
import iconImage from '../images/icons/round_image_white.png'

import GitHubLink from './projects/GitHubLink'
import PlayLink from './projects/PlayLink'


function ProjectThumbnail({ imgOnClick, hideToggleFooter, ...props }) {
    const imgSrc = require('../images/project/' + props.src)
    return <img onClick={ imgOnClick } alt={`Project Image ${props.key}`} className='project-image' key={props.key} src={imgSrc}></img>
}

function ProjectTools({ tools, ...props }) {
    return (
    <> 
        <section className="project-tools">
            {tools.map(function(value, index) {
                return <span key={index}> {value} </span>
            })}
        </section>
    </>    
    )
}

function ProjectDescription({ description, ...props }) {
    return (
        <>
            <hr style={{ width: '90%' }} />
            {description.map( (paragraph, index) => {
                return <p key={index}>{paragraph}</p>
            })}
            <hr style={{ width: '90%' }} />
        </>
    )
}

function ProjectLinks({ project, ...props }) {
    return (
        <section className='project-links'>
            {project?.gitURL
                ? <GitHubLink href={project.gitURL} />
                : ""
            }
            {project?.demoURL
                ? <PlayLink href={project.demoURL} />
                : ""
            }            
        </section>
    )
}

function ProjectHeader({ project, ...props }) {
    return (
    <>
        <div className="project-name">
            {project.name}
        </div>
        <div className="project-summary">
            {project.summary}
        </div>
    </>
    )
}

function ProjectScreenshots({ project, ...props }) {

    const refProjectFooter = useRef();
    const [activeImage, setActiveImage] = useState(null);

    let isFullScreen = false;

    function handleToggleFooter(e) {
        const footerElement = refProjectFooter.current;
        footerElement.classList.toggle('hide');
    }

    function handleClickImage(e) {
        if( activeImage ) {
            activeImage.classList.remove('active');
        }
        e.currentTarget.classList.add('active');
        setActiveImage(e.currentTarget);

        if( ! isFullScreen ) {
            handleEnterFullScreen();
        }
    }
    
    function handleEnterFullScreen() {
        const footerElement = refProjectFooter.current;
        footerElement.classList.add('full-screen');
        
        isFullScreen = true;
        
    }
    function handleExitFullScreen(e) {
        if( activeImage ){
            activeImage.classList.remove('active');
            setActiveImage(null);
        } 
        const footerElement = refProjectFooter.current;
        footerElement.classList.remove('full-screen');
        isFullScreen = false;

    }
    return (
        <footer ref={refProjectFooter} className='project-footer hide'>
            <span onClick={handleToggleFooter} className='project-footer-toggle'>
                &nbsp;&nbsp; <img src={iconImage} alt="Project Images" /> &nbsp;Screenshots 
                <i className='num-circle' >{project.images ? project.images.length : "0"} </i>
            </span>
            <i className='exit-icon' tabIndex={1}  > <img src={iconClose} role='button' onClick={()=>handleExitFullScreen()} /> </i>
            <div className='project-footer-img-wrapper'>
                    {
                    project.images.map(function(value, index) {
                        return <ProjectThumbnail imgOnClick={handleClickImage} key={index} src={value} />
                    })
                }
            </div>
            <section className='project-active-img'>
                {activeImage ? <img src={activeImage.src} /> : ''}
            </section>
        </footer>
    )
}

function ProjectContent({ project, ...props }) {

    return (
        <section className='project-content'>
            <div className='project-description'>
                <ProjectHeader project={ project }/>
                <ProjectDescription description={project.description} />
                <ProjectTools tools={ project.tools } />
            </div> 

            <ProjectLinks project={ project } />   
            <ProjectScreenshots project={ project } />
            
        </section>
        )
}

function Project(props) {

    const [activeProject, setActiveProject] = useState(projects.getActive());

    function handleClickNext(e) {
        const nextActive = projects.nextActive();
        setActiveProject(nextActive)
    }
    function handleClickPrev(e) {
        const prevActive = projects.prevActive();
        setActiveProject(prevActive)
    }

    return(
        <>
        <div className={`project-wrapper ${props.active ? 'active' : true} `} >
            <div className='project-page-header'>
                <div className='project-page-category'>
                { activeProject 
                    ? activeProject.category 
                    : ""}
                </div>
                <div onClick={handleClickPrev} className='project-page-prev'>
                    <img src={iconPrev} />
                </div>
                <div onClick={handleClickNext} className='project-page-next'>
                    <img src={iconNext} />
                </div>
            </div>
        { activeProject 
            ? <ProjectContent project={activeProject}  />
            : projects.categories[0]
        }
        </div>
    </>)
}

function Projects(props) {

    const tabTrap = useCallback(function(e) {
        const fullScreenFooter = document.querySelector('.project-footer');
        if(fullScreenFooter.classList.contains('full-screen')) {
            let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
            let isEscPressed = e.key === 'Esc' || e.key === 'Escape'
            const exitIcon = document.querySelector('.exit-icon img');
            if(isEscPressed) {
                exitIcon.click();
            }
            if(isTabPressed) {
                if( exitIcon ) {
                    exitIcon.focus();
                    e.preventDefault();
                } 
            }
        }
    })

    useEffect(()=>{
        const footerElement = document.querySelector('.project-footer');
        footerElement.classList.add('fade-in');
        setTimeout( () => {     
            footerElement.classList.remove('hide')
        }, 1500);

        document.addEventListener("keydown", tabTrap, true);

        return ()=>{
            document.removeEventListener("keydown", tabTrap, true);

        }

    })

    return (

        <ContentContainer noScroll={true} className="content-projects" hideHeader={true}>
            
            <Project type="personal" active/>

        </ContentContainer>
    )
}

export default Projects;
