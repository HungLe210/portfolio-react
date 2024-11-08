import React from 'react'
import './Hero.sass';
import { profile_avatar, profile_img } from '../../assets'
import ProfileImage from '../Specific-Components/ProfileImage/ProfileImage';


const Hero = () => {
    return (
        <div className='hero'>

            <ProfileImage />
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