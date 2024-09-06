import React from 'react'
import './Intro.scss'

const Intro = () => {
    return (
        <div
            className='intro'
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" viewBox="0 0 116 116" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M116 58C116 90.0325 90.0325 116 58 116C25.9675 116 0 90.0325 0 58C0 25.9675 25.9675 0 58 0C90.0325 0 116 25.9675 116 58ZM43.6351 52.2962H39.049V68H31.6488V52.2962H26.8195L27.1322 46.4247H44.0376H44.052H52.0632L53.7309 59.6617H54.1478L55.6417 46.4247H63.2852L59.116 68H48.45L44.0483 46.4769L43.6351 52.2962ZM88.5161 68H81.9497V57.7161H81.7759L79.7261 68H73.6461L71.631 57.7161H71.4573V68H64.9604L65.7942 46.4247H75.0358L76.6687 56.1874H76.9814L78.5796 46.4247H87.717L88.5161 68ZM108 58.5C108 85.8381 85.8381 108 58.5 108C31.1619 108 9 85.8381 9 58.5C9 31.1619 31.1619 9 58.5 9C85.8381 9 108 31.1619 108 58.5ZM110 58.5C110 86.9427 86.9427 110 58.5 110C30.0573 110 7 86.9427 7 58.5C7 30.0573 30.0573 7 58.5 7C86.9427 7 110 30.0573 110 58.5Z" fill="white" />
            </svg>
            <h1>Tu veux une médaille ?</h1>
            <p>Lorem ipsum petit texte pourquoi pas tous ça voilà quoi.</p>
            <div className="titleInputContainer">

            </div>
            <div className="descriptionInputContainer">

            </div>
            <div className="startButton">
                <span>Let's go</span>
            </div>
            <span>lorem ipsum</span>
        </div>
    )
}

export default Intro