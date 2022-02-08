import React, {useState, useEffect} from 'react'
import PropTypes, { string } from 'prop-types'
import './ContentContainer.scss'
import Button from './Button'

/**
 * @component */
function SectionContainer(props) {
    const isCarousel = props.contentArr ? true : false
    const isContact = props.styleMod === "contact" ? true : false
    const hasTabDropdown = props.tabDropDown && props.tabDropDown.length > 1;
    const className = props.className ?? "" + " " + props.styleMod ?? ""


    const [currentContentIndex, setCurrentContentIndex] = useState(0)
    useEffect(()=>{
        if(isCarousel){
            document.querySelectorAll('.index-bubble').forEach(bubble=>{
                bubble.classList.remove('current')
            })
            setTimeout(()=>{
                const activeBubble = document.querySelector(`span[id='${currentContentIndex}']`)
                if(activeBubble){
                    activeBubble.classList.add('current')
                } 
            },50)
        }
    },[currentContentIndex, isCarousel])

    const maxContentIndex = isCarousel ? props.contentArr.length - 1: ""

    const [prevContentIndex, setPrevContentIndex] = useState(maxContentIndex)
    const [nextContentIndex, setNextContentIndex] = useState(1)


    function changeContentLeft(){
        setNextContentIndex(currentContentIndex)
        setCurrentContentIndex(prevContentIndex)
        if(prevContentIndex === 0) {
            setPrevContentIndex(maxContentIndex)
        } else {
            setPrevContentIndex(prevContentIndex-1)
        }

    }
    function changeContentRight(){
        setPrevContentIndex(currentContentIndex)
        setCurrentContentIndex(nextContentIndex)
        if(nextContentIndex === maxContentIndex) {
            setNextContentIndex(0)
        } else {
            setNextContentIndex(nextContentIndex+1)
        }    
    }
    function handleTransition(direction){
        const circles = document.querySelectorAll('.circle')
        circles.forEach(circle=>{
            circle.classList.add('transition')})

        const buttons = document.querySelectorAll('.content-button')
        buttons.forEach(button=>{
            button.classList.add('disable')
        })

        document.querySelector('.section-header').classList.add("transition")

        const tabs = document.querySelectorAll('.link-tab')
        if(tabs){
            tabs.forEach(tab=>{
                tab.classList.add('hide')
            })
        }

        setTimeout(()=>{
            circles.forEach(circle=>{
                circle.classList.remove('transition')
            })
            document.querySelector('.section-header').classList.remove("transition")

            const newTabs = document.querySelectorAll('.link-tab')

            if(newTabs){
                newTabs.forEach(tab=>{
                    tab.classList.remove('hide')
                })
            }
            }, 800)

        if(direction==="left") {
            document.querySelector('.content-container-wrapper').classList.add(`transition-left`)
            setTimeout(()=>{
                document.querySelector('.content-container-wrapper').classList.remove(`transition-left`)
                document.querySelector('.content-container-wrapper').classList.add(`transition-from-right`)
                },750)
            setTimeout(()=>{
                buttons.forEach(button=>{
                    button.classList.remove('disable')
                })
                document.querySelector('.content-container-wrapper').classList.remove(`transition-from-right`)
            }, 1200)
        }
        if(direction==="right") {
            document.querySelector('.content-container-wrapper').classList.add(`transition-right`)
            setTimeout(()=>{
                document.querySelector('.content-container-wrapper').classList.remove(`transition-right`)
                document.querySelector('.content-container-wrapper').classList.add(`transition-from-left`)
                },750)
            setTimeout(()=>{
                buttons.forEach(button=>{
                    button.classList.remove('disable')
                })
                document.querySelector('.content-container-wrapper').classList.remove(`transition-from-left`)
            }, 1200)
        }
    }
    function handleLeftButtonClick(){
        handleTransition("left")
        setTimeout(()=>{
            changeContentLeft()
        }, 700)
    }
    function handleRightButtonClick(){
        handleTransition("right")
        setTimeout(()=>{
            changeContentRight()
        }, 700)
    }   

    /* Sub Components */
    function ContentHeader() {
        return (
            <header className="section-header">      
                <span className="circle orange one"></span>
                <span className="circle orange two"></span>
                <span className="circle orange three"></span> 
        {isCarousel ? <h2>{props.headerArr[currentContentIndex]}</h2> : props.header ? <h2>{props.header}</h2> : ""}
                <span className="circle blue three"></span>
                <span className="circle blue two"></span>
                <span className="circle blue one"></span>
            </header>
        )
    }

    function ContactFooter() {
        return (
            <footer className="contact-footer">
                    <span className="circle-footer orange one"></span>
                    <span className="circle-footer orange one"></span>
                    <span className="circle-footer orange two"></span>
                    <span className="circle-footer orange two"></span>
                    <span className="circle-footer orange three"></span>                 
                    <span className="circle-footer orange three"></span>                 
                    <span className="circle-footer blue three"></span>
                    <span className="circle-footer blue three"></span>
                    <span className="circle-footer blue two"></span>
                    <span className="circle-footer blue two"></span>
                    <span className="circle-footer blue one"></span>
                    <span className="circle-footer blue one"></span>
                </footer>
        )
    }

    function TabDropDown() {
        return (
            <select className='content-tab-dropdown' type="dropdown">
            {
                props.tabDropDown.map(tab => {
                    return <option>{tab}</option>
                })
            }
            </select>
        )
    }
    
    return (
        <article className={`section-container ${className}`}>
            {hasTabDropdown ? <TabDropDown/> : ""}
            <section className="section-container-wrapper">
                {props.hideHeader !== true ? <ContentHeader /> : ""}
                <section className="content-container">
                    <div className={`content-container-wrapper ${props.spreadEven ? "spread-even" : ""} ${props.noScroll ? "no-scroll" : ""}`}>
                    {isCarousel ? props.contentArr[currentContentIndex] : props.content}
                    {isCarousel !== true ? props.children : ""}
                    </div>
                </section>
            {isCarousel ? 
                <footer>
                    {props.contentArr.map((item, index)=>{
                        return <span key={index} id={index}  className="index-bubble">•</span>}) 
                        }
                </footer>
            : ""}
            {isContact ?
                <ContactFooter />
            : ""}
            </section>
            {isCarousel ?
            <>
            <div className="content-button left" onClick={handleLeftButtonClick}>◄ {props.headerArr[prevContentIndex]}</div>
            <div className="content-button right" onClick={handleRightButtonClick}>{props.headerArr[nextContentIndex]} ►</div>
            </>
            : ""}
        </article>
    )
}

SectionContainer.propTypes = {
    styleMod: PropTypes.string,
    
    /**
     * Header Text: Displayed between circles at top of container
     */
    header: PropTypes.string,
    
    /**
     * Hides header. 
     * 
     * default
     *                      
     *          false
     */
    hideHeader: PropTypes.bool,
    
    /**
     * hides scroll bar in content-container
     * 
     * default
     * 
     *          true
     */
    noScroll: PropTypes.bool,

    /**
     * Spread content evently with Flex
     */
    spreadEven: PropTypes.bool,
    
    /**
     * Append class to element
     */
    className: PropTypes.string,
    
    /**
     * Array of string. Tab dropdown
     */
    tabDropDown: PropTypes.arrayOf(string),
}

export default SectionContainer;