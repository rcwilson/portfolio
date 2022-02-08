import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

function Modal(props) {

    const refContainer = React.useRef();
    const refModal = React.useRef();

    React.useEffect(() => {
        if( !props.displayModal ) {
            refContainer.current.classList.remove('fade-in');

            setTimeout(() => {
                refModal.current.classList.add('off')
            }, 1000)
        } else if( props.displayModal === true) {
            refContainer.current.classList.add('fade-in')
            refModal.current.classList.remove('off')
            window.addEventListener( "keydown", handleKeyEvent )
        }

        return ()=>{
            window.removeEventListener( "keydown", handleKeyEvent)
        }
    }, [props.displayModal]);

    function handleKeyEvent(e){
        switch(e.key){
            case "Esc":
            case "Escape":
                exitModal(e);
                break;
            default:
                return;
        }
    }
    function exitModal(e) {
        if( props.setDisplayModal ) {
            props.setDisplayModal(false);
        }
    }   

    return (
        <div ref={refModal} className='modal project-modal off'>
            
            <div ref={refContainer} onClick={props.static ? null : exitModal} className='modal-container'>
                <div  className='modal-content'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    /** displayModal - bool */
    displayModal : PropTypes.bool,
    setDisplayModal: PropTypes.func,
    static: PropTypes.bool,


}

export default Modal;