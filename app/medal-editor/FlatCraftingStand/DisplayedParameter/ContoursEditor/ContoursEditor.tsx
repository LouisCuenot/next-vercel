import React from 'react'
import './ContoursEditor.scss'
import { useMedalContext } from '@/app/medal-editor/context/MedalEditorContext'
import { ContoursType } from '@/app/types/Medal'

const ContoursEditor = () => {

  const { currentMedal, setCurrentMedal, isDarkMode } = useMedalContext()

  const updateCurrentMedal = (contours:ContoursType) => {
    if(!currentMedal)return
    setCurrentMedal({
      collier:currentMedal.collier,
      content:currentMedal.content,
      icon:currentMedal.icon,
      metal:currentMedal.metal,
      contours
    })
  }

  return (
    <>
      <div
        className={`cBorder ${currentMedal?.contours === 'stars' ? 'active' : ''}`}
        onClick={() => updateCurrentMedal('stars')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="none">
          <path d="M7.64996 36L10.7289 22.6895L0.402588 13.7368L14.0447 12.5526L19.35 0L24.6552 12.5526L38.2973 13.7368L27.971 22.6895L31.05 36L19.35 28.9421L7.64996 36Z" fill={isDarkMode ? '#FFFFFF' : '#8C8C8C'} />
        </svg>
      </div>
      <div
        className={`cBorder ${currentMedal?.contours === 'points' ? 'active' : ''}`}
        onClick={() => updateCurrentMedal('points')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="18" fill={isDarkMode ? '#FFFFFF' : '#8C8C8C'} />
        </svg>
      </div>
      <div
        className={`cBorder ${currentMedal?.contours === 'lauriers' ? 'active' : ''}`}
        onClick={() => updateCurrentMedal('lauriers')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" viewBox="0 0 46 36" fill="none">
          <path d="M45.4026 35.6712C45.4026 35.6712 44.5831 35.7534 43.2309 35.8356C41.8787 35.9178 39.9938 36 37.8221 36C33.4786 35.8767 28.1108 35.2192 23.9722 33.3699C21.3908 32.2603 19.6288 30.863 18.4405 29.5069C17.2522 28.1507 16.6785 26.7534 16.3507 25.5617C15.7771 23.1781 16.3507 21.3699 16.3507 21.3699C16.3507 21.3699 17.0883 21.5343 18.3176 21.7397C19.5468 22.0274 21.1859 22.274 22.9478 22.5617C24.7508 22.8493 26.6766 23.2603 28.3976 23.548C30.1596 23.8767 31.6757 24.2055 32.7411 24.6165C34.7899 25.4795 37.8221 28.1918 40.4855 30.7397C41.7967 32.0137 43.026 33.2466 43.9275 34.1507C44.788 35.0548 45.3616 35.6301 45.3616 35.6301L45.4026 35.6712Z" fill={isDarkMode ? '#FFFFFF' : '#8C8C8C'} />
          <path d="M22.0053 0.000230789C22.0053 0.000230789 21.4316 0.164616 20.4892 0.534477C19.5058 0.863245 18.1536 1.43859 16.5965 2.01393C15.0394 2.58927 13.2774 3.41119 11.4745 4.3153C9.71254 5.13721 7.9096 6.16461 6.31155 7.35639L5.81984 7.72625C2.09103 10.4797 0.615905 13.5208 0.165171 15.8632C-0.285563 18.2468 0.329074 19.8906 0.329074 19.8906C0.329074 19.8906 2.8286 19.3153 5.81984 18.4523C9.34376 17.3016 13.5233 15.7399 15.2443 14.2605C16.8833 12.9865 18.7272 9.53447 19.9565 6.20571C21.2677 2.91804 22.0053 0.000230789 22.0053 0.000230789Z" fill={isDarkMode ? '#FFFFFF' : '#8C8C8C'} />
        </svg>
      </div>
      <div
        className={`cBorder ${currentMedal?.contours === 'tripleLines' ? 'active' : ''}`}
        onClick={() => updateCurrentMedal('tripleLines')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="0.5" y="0.5" width="35" height="7" fill={isDarkMode ? '#FFFFFF' : '#8C8C8C'} stroke={isDarkMode ? '#FFFFFF' : '#8C8C8C'} />
          <rect x="0.5" y="14.5" width="35" height="7" fill={isDarkMode ? '#FFFFFF' : '#8C8C8C'} stroke={isDarkMode ? '#FFFFFF' : '#8C8C8C'} />
          <rect x="0.5" y="28.5" width="35" height="7" fill={isDarkMode ? '#FFFFFF' : '#8C8C8C'} stroke={isDarkMode ? '#FFFFFF' : '#8C8C8C'} />
        </svg>
      </div>
      <div
        className={`cBorder ${currentMedal?.contours === 'verticalLines' ? 'active' : ''}`}
        onClick={() => updateCurrentMedal('verticalLines')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
          <rect x="36.2973" width="36" height="8" transform="rotate(90 36.2973 0)" fill={isDarkMode ? '#FFFFFF' : '#8C8C8C'} />
          <rect x="22.2973" width="36" height="8" transform="rotate(90 22.2973 0)" fill={isDarkMode ? '#FFFFFF' : '#8C8C8C'} />
          <rect x="8.29733" width="36" height="8" transform="rotate(90 8.29733 0)" fill={isDarkMode ? '#FFFFFF' : '#8C8C8C'} />
        </svg>
      </div>
    </>
  )
}

export default ContoursEditor