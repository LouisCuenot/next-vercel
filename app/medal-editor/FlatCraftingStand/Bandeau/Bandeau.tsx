import React from 'react'
import './Bandeau.scss'
import { useMedalContext } from '../../context/MedalEditorContext'


const Bandeau = () => {

    const { currentMedal } = useMedalContext()

    const renderBandeau = () => {
        if (!currentMedal) return <></>
        switch (currentMedal.collier) {
            case 'blue':
                return <img className='bandeauImg' src={`/bandeaux/bandeauBlue.png`} alt='A medal necklace' />
            case 'green':
                return <img className='bandeauImg' src={`/bandeaux/bandeauGreen.png`} alt='A medal necklace' />
            case 'pink':
                return <img className='bandeauImg' src={`/bandeaux/bandeauPink.png`} alt='A medal necklace' />
            case 'red':
                return <img className='bandeauImg' src={`/bandeaux/bandeauRed.png`} alt='A medal necklace' />
            case 'yellow':
                return <img className='bandeauImg' src={`/bandeaux/bandeauYellow.png`} alt='A medal necklace' />
            case 'cyan':
                return <img className='bandeauImg' src={`/bandeaux/bandeauCyan.png`} alt='A medal necklace' />
            case 'purple':
                return <img className='bandeauImg' src={`/bandeaux/bandeauPurple.png`} alt='A medal necklace' />
            case 'grey':
                return <img className='bandeauImg' src={`/bandeaux/bandeauGrey.png`} alt='A medal necklace' />
            case 'white':
                return <img className='bandeauImg' src={`/bandeaux/bandeauWhite.png`} alt='A medal necklace' />
            case 'black':
                return <img className='bandeauImg' src={`/bandeaux/bandeauBlack.png`} alt='A medal necklace' />
        }
    }

    return (
        <div className="bandeauContainer">
            <img className='bandeauOmbre' src='/bandeaux/ombreBandeau.png' />
            {
                renderBandeau()
            }

        </div>
    )
}

export default Bandeau