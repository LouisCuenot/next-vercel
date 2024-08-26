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
                return <Image priority width={1920} height={1080} className='bandeauImg' src={`/bandeaux/NewBandeauBLEU.png`} alt='A medal necklace' />
            case 'green':
                return <Image priority width={1920} height={1080} className='bandeauImg' src={`/bandeaux/NewBandeauVERT.png`} alt='A medal necklace' />
            case 'pink':
                return <Image priority width={1920} height={1080} className='bandeauImg' src={`/bandeaux/NewBandeauROSE.png`} alt='A medal necklace' />
            case 'red':
                return <Image priority width={1920} height={1080} className='bandeauImg' src={`/bandeaux/NewBandeauROUGE.png`} alt='A medal necklace' />
            case 'yellow':
                return <Image priority width={1920} height={1080} className='bandeauImg' src={`/bandeaux/NewBandeauJAUNE.png`} alt='A medal necklace' />
            case 'cyan':
                return <Image priority width={1920} height={1080} className='bandeauImg' src={`/bandeaux/NewBandeauCYAN.png`} alt='A medal necklace' />
            case 'purple':
                return <Image priority width={1920} height={1080} className='bandeauImg' src={`/bandeaux/NewBandeauVIOLET.png`} alt='A medal necklace' />
            case 'grey':
                return <Image priority width={1920} height={1080} className='bandeauImg' src={`/bandeaux/NewBandeauGRIS.png`} alt='A medal necklace' />
            case 'white':
                return <Image priority width={1920} height={1080} className='bandeauImg' src={`/bandeaux/NewBandeauBLANC.png`} alt='A medal necklace' />
            case 'black':
                return <Image priority width={1920} height={1080} className='bandeauImg' src={`/bandeaux/NewBandeauNOIR.png`} alt='A medal necklace' />
        }
    }

    return (
        <div className="bandeauContainer">
            <Image priority width={1920} height={1080} className='bandeauOmbre' src='/bandeaux/NewBandeauOMBRE.png' alt="l'ombre du bandeau" />
            {
                renderBandeau()
            }

        </div>
    )
}

export default Bandeau