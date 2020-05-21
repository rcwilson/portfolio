import React from 'react'
import './NavBarMobile.scss'
import aboutIcon from '../images/icons/sims-icon.png'
import creditsIcon from '../images/icons/credits-icon.png'
import emailIcon from '../images/icons/email.png'
import gearIcon from '../images/icons/gear-icon.png'
import wrenchIcon from '../images/icons/wrench-icons8.png'
import resumeIcon from '../images/icons/resume-icon.png'

export default function NavBarMobile(props) {

  let touch = false
  if(("ontouchstart" in document.getElementById("root"))){
    touch = true  
  }
  
  function exitNavMenu(){
    const navWrapper = document.querySelector(".navbar-mobile")
    const navMenu = document.querySelector(".navbar-menu")
    const navButton = document.querySelector(".navbar-button")

    navWrapper.classList.add("hide")
    navMenu.classList.remove("open")
    navButton.classList.remove("hide")
    setTimeout(()=>{
      navWrapper.classList.add("disable")
    },1400)
  }
  function showNavMenu(){
    const navWrapper = document.querySelector(".navbar-mobile")
    const navMenu = document.querySelector(".navbar-menu")
    const navButton = document.querySelector(".navbar-button")

    navWrapper.classList.remove("hide")
    navWrapper.classList.remove("disable")
    navMenu.classList.add("open")
    navButton.classList.add("hide")

  }
  function handleNavLinkClick(linkName, checkForTouchScreen){
    console.log(`${linkName}- touch:${touch} checkfortouch:${checkForTouchScreen}` )
    if(checkForTouchScreen && touch){
      return
    } else {
      exitNavMenu()
      const disabledLink = document.querySelector('.navbar-link-disabled')
      const linkToDisable = document.getElementById(`link-${linkName}`)
  
      if(disabledLink){
        disabledLink.classList.remove('navbar-link-disabled')
      }
      linkToDisable.classList.add('navbar-link-disabled')
  
      switch(linkName){
        case "projects": props.projects();
        break;
        case "resume": props.resume();
        break;
        case "about": props.about();
        break;
        case "skills": props.skills();
        break;
        case "contact": props.contact();
        break;
        case "credits": props.credits();
        break;
        default: 
        break;
      }
    }
  }

  

    return (
      <>
        <nav className="navbar-button hide" onClick={showNavMenu}>≡</nav>
        <nav className="navbar-mobile hide disable">
          <section className="navbar-menu">
            
            <div id="link-projects" className="navbar-link left" onClick={()=>{handleNavLinkClick("projects",true)}}>
              <span onClick={()=>{handleNavLinkClick("projects")}}>Projects</span>
              <img src={wrenchIcon}></img>
            </div>
            <div id="link-resume" className="navbar-link left" onClick={()=>{handleNavLinkClick("resume",true)}}>
              <span onClick={()=>{handleNavLinkClick("resume")}}>Resume</span>
              <img src={resumeIcon}></img>
            </div>
            <div id="link-about" className="navbar-link left" onClick={()=>{handleNavLinkClick("about",true)}}>
              <span onClick={()=>{handleNavLinkClick("about")}}>About Me</span>
              <img src={aboutIcon}></img>
            </div>
            <div id="link-skills" className="navbar-link right" onClick={()=>{handleNavLinkClick("skills",true)}}>
              <span onClick={()=>{handleNavLinkClick("skills")}}>Skills</span>
              <img src={gearIcon}></img>
            </div>
            <div id="link-contact" className="navbar-link right" onClick={()=>{handleNavLinkClick("contact",true)}}>
              <span onClick={()=>{handleNavLinkClick("contact")}}>Contact</span>
              <img src={emailIcon}></img>
            </div>
            <div id="link-credits" className="navbar-link right" onClick={()=>{handleNavLinkClick("credits",true)}}>
              <span onClick={()=>{handleNavLinkClick("credits")}}>Credits</span>
              <img src={creditsIcon}></img>
            </div>
          </section>
            <div className="navbar-exit" onClick={exitNavMenu}></div>
        </nav>
      </>
    )
}
