import React from 'react'
import './Button.scss'

export default function Button(props) {

    function handleClick(e) {
        if(props.onClick) props.onClick(e);
    }
    function handleKeyDown(e) {
        if(e.key) {
            switch(e.key) {
                case "Enter":
                case " ": 
                    props.onClick(e);
                    return;
            }   
        }
    }
    return (
        <div tabIndex={props.tabIndex} onKeyDown={handleKeyDown} onClick={handleClick} type="button" className='button'>
            {props.children}
        </div>
    )
}
