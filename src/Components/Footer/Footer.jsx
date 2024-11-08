import React from 'react'
import './Footer.sass'
import { footer_logo, user_icon } from '../../assets'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>Experience asdasadsdsa</p>
                </div>

                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />

            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2024 Lies. All rights</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with Me</p>
                </div>
            </div>

        </div>
    )
}

export default Footer