import React from 'react';
import './App.scss';
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'
import NavBubble from './components/NavBubble'

import wrenchIcon from './images/icons/wrench-icons8.png'
import gearIcon from './images/icons/gear-icon.png'
import emailIcon from './images/icons/email.png'
import aboutIcon from './images/icons/sims-icon.png'
import resumeIcon from './images/icons/resume-icon.png'

function App() {
  const [toolTipContent, setToolTipContent] = React.useState("")

  //Add UseEffect so it isn't constantly listening
  //********************************************** */
  window.addEventListener('mousemove', moveToolTip)
    
    function moveToolTip(event) {
      const toolTip = document.querySelector(".tooltip")

        const clientYOffset = 30
        const clientXOffset = 10
        toolTip.style.top = (event.clientY + clientYOffset) + "px"
        toolTip.style.left = (event.clientX + clientXOffset) + "px"
      
    }
    
    function handleToolTipContent(newContent){
      setToolTipContent(newContent)
    }

  const [content, setContent] = React.useState(<ContactMe />)

  function toggleNavBubbles(linkName) {
    const navBubbleArr = document.querySelectorAll('.nav-bubble')
    navBubbleArr.forEach(bubble => {
      if (!(bubble.classList.contains(linkName))) {
        bubble.classList.remove('selected')
        bubble.classList.add('unselected')
      } else {
        bubble.classList.add('selected')
      }
    })
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
    if(sectionElement){
      sectionElement.classList.add('move-out')
    }
    if(skillCardContainerElement){
      skillCardContainerElement.classList.add('move-out')
    }
    setTimeout(() => {
      setContent(newContent)
    }, 1200)
  }

  function onClickProjects() {
    changeContent(<Projects tooltip={handleToolTipContent}/>)
    toggleNavBubbles('projects')
    toggleBackgroundImage('projects')
  }
  function onClickSkills() {
    changeContent(<Skills />)
    toggleNavBubbles('skills')
    toggleBackgroundImage('skills')
  }
  function onClickResume() {
    changeContent()
    toggleNavBubbles('resume')
  }
  function onClickContact() {
    changeContent(<ContactMe />)
    toggleNavBubbles('contact')
  }
  function onClickAbout() {
    changeContent(<AboutMe />)
    toggleNavBubbles('about')
    toggleBackgroundImage('about')
  }

  return (
    <>
      <div className="App">
        <div className="background-image">
          <div className="bg-img home"></div>
          <div className="bg-img about"></div>
          <div className="bg-img projects"></div>
          <div className="bg-img skills  show"></div>
        </div>


        <nav className="nav-wrapper">
        <NavBubble number="1" position="left" linkName="projects" onClick={onClickProjects}>
          <span>Projects</span>
          <img src={wrenchIcon} alt="projects"></img>
        </NavBubble>
        <NavBubble number="1" position="right" linkName="contact selected" onClick={onClickContact}>
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
        <NavBubble number="3" position="right" linkName="about" onClick={onClickAbout}>
          <span>About Me</span>
          <img src={aboutIcon} alt="about me"></img>
        </NavBubble>

        </nav>

        <div className="main-wrapper">
        <span className="tooltip">{toolTipContent}</span>
          {content}
        </div>

      </div>
    </>
  );
}

export default App;
