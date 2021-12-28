import React from 'react'
import ContentContainer from './ContentContainer'
import headshot from '../images/headshot/headshot.png'
import './AboutMe.scss'

export default function AboutMe() {

    function Background() {
        return (
            <>
            <header>
            <img alt="Headshot" src={headshot} className="headshot"></img>
            </header>
            <section className="about-content">

            <p>
            My name is <i>Richard</i>. I've been obsessed with technology my entire life.
            </p>
            <p>
            I started young as a gamer with my first Nintendo console and continued when we acquired a home PC. 
            From there it's been a constant adventure of exploring what I can play, see, and create.
            </p>
            <p>
            My early experiences in coding were creating games using various frameworks like Flash, RPG Maker, etc. It wasn't until
             several years later that I finally decided to pursue these interest as an actual career prospect.
            </p>
            </section>
            </>
        )
    }
    function Journey(){
        return(
            <section className="about-content">
            <p>
            I moved from a small town in Ohio to <i>Columbus</i> and have called it home for 10 years.
            </p>
            <p>
            Having over a decade of service-industry experience, 
            it was natural to find my calling as a <i>bartender</i> for the majority of my life in the city.
            It is an exciting life of crafting and making connections with people.
            </p>
            <p>
            In Fall '19, I decided to enroll in the coding bootcamp <i>We Can Code It</i> to pursue a career role in technology.
            Taking a leap to the professional and technical world is one of my most favorite and important pursuits I've ever made.            
            </p></section>
        )
    }
    function Summary(){
        return(
            <section className="about-content">
            <p>
            Since graduating, I've landed a role as a <i>Junior Software Engineer</i> with <i>IQVentures</i>. Here, I've gotten to add plenty more 
            to my toolbelt--such as <i>PHP</i>, <i>JQuery</i>, and <i>Bootstrap</i>. 
            </p>
            <p>
            This experience is also fine-tuning my appreciation for <i>Full-Stack</i> development. As much as I enjoy "making things look pretty," there's 
            also a beauty in the organization of its structure. And there's always room to grow in both.
            </p>
            </section>
        )
    }
    function Hobbies(){
        return(
            <table className="hobbies-list">
                <tbody>
                    <tr><td>Photography</td><td>●●</td></tr>
                    <tr><td>Gaming</td><td>●●●●●</td></tr>
                    <tr><td>Lifting</td><td>●●●</td></tr>
                    <tr><td>Improv</td><td>●●●●●</td></tr>
                    <tr><td>Riddles</td><td>●●●●</td></tr>
                    <tr><td>Mixology</td><td>●●●●●</td></tr>
                    <tr><td>Reading</td><td>●●●●●</td></tr>
                    <tr><td>Dancing</td><td>●●●●</td></tr>
                    <tr><td>Designing</td><td>●●●●</td></tr>
                    <tr><td>Socializing</td><td>●●●●●</td></tr>
                    <tr><td>Conventions</td><td>●●●●●</td></tr>
                    <tr><td>Piano</td><td>●●</td></tr>
                    <tr><td>Singing</td><td>●●●</td></tr>
                </tbody>
               
            </table>
        )
    }
    const contentArray = [<Background />, <Journey />,<Summary />, <Hobbies />]
    const headerArray = ["Background", "Journey", "Summary", "Hobbies"]

    return (
        <>
        <ContentContainer contentArr={contentArray} headerArr={headerArray} styleMod={"about"}>
            
        </ContentContainer>
        </>
    )
}
