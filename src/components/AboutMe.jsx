import React from 'react'
import ContentContainer from './ContentContainer'
// import './AboutMe.scss'

export default function AboutMe() {

    function Background() {
        return (
            <><p>
            My name is Richard. I've been obsessed with technology my entire life.
            </p>
            <p>
            I started young as a gamer with my first Nintendo console and continued when we acquired a home PC. 
            From there it's been a constant adventure of exploring what I can play, see, and create.
            </p>
            <p>
            I've only recently made the steps to get an education and join the software development workforce. 
            </p></>
        )
    }
    function Journey(){
        return(
            <><p>
            I moved from a small town in Ohio to Columbus and have called it home for 10 years.
            </p>
            <p>
            Having over a decade of service-industry experience, 
            it was natural to find my calling as a bartender for the majority of my life in the city.
            It is an exciting life of crafting and making connections with people.
            </p>
            <p>
            In Fall '19, I decided to enroll in the coding bootcamp We Can Code It to pursue a career role in technology.
            Taking a leap to the professional and technical world is one of my most favorite and important pursuits I've ever made.            
            </p></>
        )
    }
    function Hobbies(){
        return(
            <>
                <p>Coding </p>
                <p>Gaming </p>
                <p>Cooking </p>
                <p>Strength Training </p>
                <p>Jokes </p>
                <p>Riddles </p>
                <p>Mixology </p>
                <p>Coding </p>
                <p>Gaming </p>
                <p>Cooking </p>
                <p>Strength Training </p>
                <p>Jokes </p>
                <p>Riddles </p>
                <p>Mixology </p>
            
            </>
        )
    }
    const contentArray = [<Background />, <Journey />, <Hobbies />]
    const headerArray = ["About Me", "Journey", "Hobbies"]

    return (
        <>
        <ContentContainer contentArr={contentArray} headerArr={headerArray}>
            
        </ContentContainer>
        </>
    )
}
