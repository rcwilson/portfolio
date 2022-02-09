import React, { useEffect } from 'react';
import './App.scss';
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Credits from './components/Credits'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'
import NavBubble from './components/NavBubble'
import NavBarMobile from './components/NavBarMobile'

import aboutIcon from './images/icons/sims-icon.png'
import creditsIcon from './images/icons/credits-icon.png'
import emailIcon from './images/icons/email.png'
import gearIcon from './images/icons/gear-icon.png'
import wrenchIcon from './images/icons/wrench-icons8.png'
import resumeIcon from './images/icons/resume-icon.png'
import Welcome from './components/Welcome';

function App() {
 
  /**************************
   * DEV SETTINGS
   *************************/
  const devMode = false;
  const devStart = onClickProjects;
  //************************* */

  const [content, setContent] = React.useState(<Intro navBar={toggleNavBubbles}/>)
  useEffect( () => {
    if( devMode ) {
      devStart();
      document.querySelector('.navbar-button').classList.remove("hide")
    }
  },[])

  function toggleNavBubbles(linkName) {
    const navBubbleArr = document.querySelectorAll('.nav-bubble')
    const disabledLink = document.querySelector('.navbar-link-disabled')
    const linkToDisable = document.getElementById(`link-${linkName}`)
    navBubbleArr.forEach(bubble => {
      if (!(bubble.classList.contains(linkName))) {
        bubble.classList.remove('selected')
        bubble.classList.add('unselected')
      } else {
        bubble.classList.add('selected')
      }
    })
    if(disabledLink){
      disabledLink.classList.remove('navbar-link-disabled')
    }
    if(linkToDisable){
      linkToDisable.classList.add('navbar-link-disabled')
    }
    setTimeout(() => {
      navBubbleArr.forEach(bubble => {
        bubble.classList.remove('unselected')
      })
    }, 4000)
  }

  function toggleBackgroundImage(linkName) {
    const bgImgArr = document.querySelectorAll('.bg-img')
    bgImgArr.forEach(image => {
      if (!(image.classList.contains(linkName))) {
        image.classList.remove('show')
      } else {
        image.classList.add('show')
      }
    })
  }

  function changeContent(newContent) {
    const sectionElement = document.querySelector('.section-container')
    const skillCardContainerElement = document.querySelector('.skill-cards-container')
    const projectFooterElement = document.querySelector('.project-footer')
    if(sectionElement){
      sectionElement.classList.add('move-out')
    }
    if(skillCardContainerElement){
      skillCardContainerElement.classList.add('move-out')
    }
    if(projectFooterElement){
      projectFooterElement.classList.remove('fade-in')
    }
    setTimeout(() => {
      setContent(newContent)
    }, 1200)
  }

  function changeTitle( pageName ) {
    const newPageTitle = `Richard C Wilson | ${pageName}`;
    document.title = newPageTitle;
  }

  function onClickProjects() {
    changeContent(<Projects />)
    toggleNavBubbles('projects')
    toggleBackgroundImage('projects')
    changeTitle("Projects")
  }
  function onClickSkills() {
    changeContent(<Skills />)
    toggleNavBubbles('skills')
    toggleBackgroundImage('skills')
    changeTitle("Skills")
  }
  function onClickResume() {
    changeContent(<Resume />)
    toggleNavBubbles('resume')
    toggleBackgroundImage('resume')
    changeTitle("Resume")
  }
  function onClickContact() {
    changeContent(<ContactMe />)
    toggleNavBubbles('contact')
    toggleBackgroundImage('contact')
    changeTitle("Contact")
  }
  function onClickAbout() {
    changeContent(<AboutMe />)
    toggleNavBubbles('about')
    toggleBackgroundImage('about')
    changeTitle("About")
  }
  function onClickCredits() {
    changeContent(<Credits />)
    toggleNavBubbles('credits')
    toggleBackgroundImage('credits')
    changeTitle("Credits")
  }
  function onClickWelcome() {
    changeContent(<Welcome />)
    toggleNavBubbles('credits')
    toggleBackgroundImage('credits')
  }

  return (
    <>
      <div className="App">
        <div className="background-image">
          <div className="bg-img home show"></div>
          <div className="bg-img about"></div>
          <div className="bg-img credits"></div>
          <div className="bg-img projects"></div>
          <div className="bg-img resume"></div>
          <div className="bg-img contact"></div>
          <div className="bg-img skills "></div>
        </div>

        <NavBarMobile
          projects={onClickProjects}
          resume={onClickResume}
          about={onClickAbout}
          skills={onClickSkills}
          contact={onClickContact}
          credits={onClickCredits}
        />
        <nav className="nav-wrapper">
          <NavBubble number="1" position="left" linkName="projects" onClick={onClickProjects}>
            <span>Projects</span>
            <img src={wrenchIcon} alt="projects"></img>
          </NavBubble>
          <NavBubble number="1" position="right" linkName="contact" onClick={onClickContact}>
            <span>Contact</span>
            <img src={emailIcon} alt="contact me"  className="contrast"></img>
          </NavBubble>
          <NavBubble number="2" position="left" linkName="resume" onClick={onClickResume}>
            <span>Resume</span>
            <img src={resumeIcon} alt="resume"></img>
          </NavBubble>
          <NavBubble number="2" position="right" linkName="skills" onClick={onClickSkills}>
            <span>Skills </span>
            <img src={gearIcon} alt="projects"></img>
          </NavBubble>
          <NavBubble number="3" position="left" linkName="about" onClick={onClickAbout}>
            <span>About Me</span>
            <img src={aboutIcon} alt="about me"></img>
          </NavBubble>
          <NavBubble number="3" position="right" linkName="credits" onClick={onClickCredits}>
            <span>Credits</span>
            <img src={creditsIcon} alt="credits"></img>
          </NavBubble>
        </nav>
        
        <div className="main-wrapper">
          {content}
        </div>

      </div>
    </>
  );
}

export default App;
