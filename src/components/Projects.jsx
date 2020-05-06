import React from 'react'
import ContentContainer from './ContentContainer'
import './Projects.scss'

import GitHubLink from './projects/GitHubLink'
import PlayLink from './projects/PlayLink'

import BringIt from './projects/BringIt'
import FriendAdventure from './projects/FriendAdventure'
import Blackjack from './projects/Blackjack'

export default function Projects(props) {

    const friendAdventureGit = "https://github.com/rcwilson/friend-adventure"
    const bringItGit = "https://github.com/rcwilson/Bring-It-Front-End"
    const blackjackGit = "https://github.com/rcwilson/blackjack-rcw"

    const blackjackPlay = "https://rcwilson.github.io/blackjack-rcw/"
    
    function addImageToolTip(event){
        const toolTipImage = <img alt="zoom-in tooltip" src={event.target.src}></img>
        props.tooltip(toolTipImage)
    }
    function clearImageToolTip(){
        props.tooltip("")
    }

    const contentArr=[
    <FriendAdventure addImageToolTip={addImageToolTip} clearImageToolTip={clearImageToolTip}/>, 
    <BringIt addImageToolTip={addImageToolTip} clearImageToolTip={clearImageToolTip}/>,
    <Blackjack addImageToolTip={addImageToolTip} clearImageToolTip={clearImageToolTip}/>
    ]
    const headerArr=["FRIEND GAME", "BRING IT", "BLACKJACK"]
    const gitHubArr=[
        <GitHubLink href={friendAdventureGit} />,
        <GitHubLink href={bringItGit} />, 
        <GitHubLink href={blackjackGit} /> 
    ]
    const playArr=["","", 
        <PlayLink href={blackjackPlay} />
]

    return (

        <ContentContainer headerArr={headerArr} contentArr={contentArr} gitHubArr={gitHubArr} playArr={playArr} styleMod="projects">
            
        </ContentContainer>
    )
}
