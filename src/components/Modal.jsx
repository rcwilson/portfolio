import React from 'react'
import './Modal.scss'

export default function Modal(props) {

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
            props.setDisplayModal(false);
    }

    return (
        <div ref={refModal} className='modal off'>
            <div ref={refContainer} onClick={exitModal} className='modal-container'>
                <div  className='modal-content'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
