import React from 'react'
import './Hero.sass';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>Lies</span> Lies lies Lies liesLies liesLies liesLies lies</h1>
            <p>LIesliessoieslise</p>
            <div className='hero-action'>
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero