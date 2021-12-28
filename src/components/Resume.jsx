import React from 'react'
import ContentContainer from './ContentContainer'
import Modal from './Modal'
import resume from './resume/Resume-public.pdf'
import resumeImg from './resume/Resume-public.png'
import './Resume.scss'
import Button from './Button'

const downloadLink = "https://docs.google.com/document/d/1hEbr8rp9GCZq9kMKQaHu2kqbweUeXzsa3s_i6yniUwQ/export?format=pdf"

export default function Resume() {
    const [displayModal, setDisplayModal] = React.useState(false)
    const iframeRef = React.useRef(null);

    function handleClickPreview(e) {
        setDisplayModal(true)
    }
    function handleClickDownload(e) {
        window.open(downloadLink)
    }
    return (
        <>
        {   displayModal && 
            <Modal displayModal={displayModal} setDisplayModal={setDisplayModal}>
                <iframe ref={iframeRef} allow="fullscreen" className='resume'
                    src="https://docs.google.com/document/d/e/2PACX-1vT_XkTyeYN_F6x6uE7dWq4TOYseVMyhm7udu-S8cLwtNRKRNKa-JdvAsRMqNzkL-mxCEDDsKzHPMN6o/pub?embedded=true">
                </iframe>
            </Modal>
        
        }

        <ContentContainer>
            <Button tabIndex={1} onClick={handleClickPreview}>Preview</Button>
            <Button tabIndex={2} href={"docs.google.com/document/d/1hEbr8rp9GCZq9kMKQaHu2kqbweUeXzsa3s_i6yniUwQ/export?format=pdf"} onClick={handleClickDownload}>Download</Button>
        </ContentContainer>
        </>
    )
}