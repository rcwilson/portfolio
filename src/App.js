import React from 'react';
import './App.scss';
import AboutMe from './components/AboutMe'
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

  const [content, setContent] = React.useState(<Intro />)

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
    if(sectionElement){
      sectionElement.classList.add('move-out')
    }
    setTimeout(() => {
      setContent(newContent)
    }, 1200)
  }

  function onClickProjects() {
    changeContent(<Projects />)
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
    changeContent()
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
          <div className="bg-img home show"></div>
          <div className="bg-img about"></div>
          <div className="bg-img projects"></div>
          <div className="bg-img skills"></div>
        </div>

        <div className="main-wrapper">
          {content}
        </div>
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
        <NavBubble number="3" position="right" linkName="about" onClick={onClickAbout}>
          <span>About Me</span>
          <img src={aboutIcon} alt="about me"></img>
        </NavBubble>

      </div>
    </>
  );
}

export default App;
