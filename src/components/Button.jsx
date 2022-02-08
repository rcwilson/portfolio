import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

function Button(props) {

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

Button.propTypes = {
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    
}

export default Button;

