import React from 'react'
import './Bandeau.scss'
import { useMedalContext } from '../../context/MedalEditorContext'
import Image from 'next/image'


const Bandeau = () => {

    const { currentMedal } = useMedalContext()

    const renderBandeau = () => {
        if (!currentMedal) return <></>
        switch (currentMedal.collier) {
            case 'blue':
                return <Image priority width={796} height={499} className='bandeauImg' src={`/bandeaux/bandeauBlue.png`} alt='A medal necklace' />
            case 'green':
                return <Image priority width={796} height={499} className='bandeauImg' src={`/bandeaux/bandeauGreen.png`} alt='A medal necklace' />
            case 'pink':
                return <Image priority width={796} height={499} className='bandeauImg' src={`/bandeaux/bandeauPink.png`} alt='A medal necklace' />
            case 'red':
                return <Image priority width={796} height={499} className='bandeauImg' src={`/bandeaux/bandeauRed.png`} alt='A medal necklace' />
            case 'yellow':
                return <Image priority width={796} height={499} className='bandeauImg' src={`/bandeaux/bandeauYellow.png`} alt='A medal necklace' />
            case 'cyan':
                return <Image priority width={796} height={499} className='bandeauImg' src={`/bandeaux/bandeauCyan.png`} alt='A medal necklace' />
            case 'purple':
                return <Image priority width={796} height={499} className='bandeauImg' src={`/bandeaux/bandeauPurple.png`} alt='A medal necklace' />
            case 'grey':
                return <Image priority width={796} height={499} className='bandeauImg' src={`/bandeaux/bandeauGrey.png`} alt='A medal necklace' />
            case 'white':
                return <Image priority width={796} height={499} className='bandeauImg' src={`/bandeaux/bandeauWhite.png`} alt='A medal necklace' />
            case 'black':
                return <Image priority width={796} height={499} className='bandeauImg' src={`/bandeaux/bandeauBlack.png`} alt='A medal necklace' />
        }
    }

    return (
        <div className="bandeauContainer">
            <Image priority width={796} height={499} className='bandeauOmbre' src='/bandeaux/ombreBandeau.png' alt="l'ombre du bandeau" />
            {
                renderBandeau()
            }

        </div>
    )
}

export default Bandeau