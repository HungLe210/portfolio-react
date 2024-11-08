import React from 'react'
import './Contact.sass'
import { call_icon, location_icon, mail_icon, theme_pattern } from '../../assets'
import TextField from '@mui/material/TextField'

const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt adipisci vero.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>hungleminh371@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+9831212312</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>District 7, HCM City</p>
                        </div>
                    </div>
                </div>

                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Write your message here</label>
                    <TextField id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Enter your message"
                        className="contact-text"
                        variant="outlined"
                        color="secondary"
                    />
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact