import React from 'react'
import './Hero.css'
import hero from '../../assets/heroImg.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='coverEffect'></div>
            <img src={hero} alt="heroImg" />
            <div className="heroContent">
                <h2> Computer Engineering </h2>
                <p> 142,765 Computer Engineers follow this </p>
            </div>
        </div>
    )
}

export default Hero