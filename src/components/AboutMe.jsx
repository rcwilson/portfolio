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
            I've recently made the steps to get an education and join the <i>software development workforce</i>. 
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
            Since graduating, I've maintained the practice of coding daily and further exploring technologies like <i>Saas</i>,
            <i> React</i>, and <i>Jamstack</i>--just to name a few.
            </p>
            <p>Although trained in <i>full-stack JavaScript</i>, I definitely found <i>UI/UX</i> front-end work to be a natural
            zone for me to specialize in.
            </p>
            <p>
                With that being said, my next steps include an <i>AWS certification</i> and <i>Java</i> training. I want to continue challenging
                myself with new languages and technologies.
            </p>
            <p>
                I can't wait to see where the future in my new field takes me--and I absolutely can't wait to <i>meet my next team</i>.
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
    const headerArray = ["Beginnings", "Journey", "Summary", "Hobbies"]

    return (
        <>
        <ContentContainer contentArr={contentArray} headerArr={headerArray} styleMod={"about"}>
            
        </ContentContainer>
        </>
    )
}
