import React, { useState } from 'react'
import './Navbar.sass'
import { logo, logo_lies, nav_underline } from '../../assets'

const Navbar = ({ scrollToSection }) => {
    const [menu, setMenu] = useState("home");

    return (
        <div id='nav' className='navbar'>
            <img src={logo_lies} alt="" />
            <ul className="nav-menu">
                <li>
                    <p
                        onClick={() => {
                            setMenu("home");
                            scrollToSection("home");
                        }}
                        className={menu === "home" ? "ping" : ""}
                    >Home</p>
                    <img
                        src={nav_underline}
                        alt=''
                        className={menu === "home" ? 'show' : ''} />
                </li>
                <li>
                    <p
                        onClick={() => {
                            setMenu("about");
                            scrollToSection("about");
                        }}
                        className={menu === "about" ? "ping" : ""}>About Me</p>
                    <img
                        src={nav_underline}
                        alt=''
                        className={menu === "about" ? 'show' : ''} />
                </li>
                <li>
                    <p
                        onClick={() => {
                            setMenu("services");
                            scrollToSection("services");
                        }}
                        className={menu === "services" ? "ping" : ""}
                    >Services</p>
                    <img
                        src={nav_underline}
                        alt=''
                        className={menu === "services" ? 'show' : ''} />
                </li>
                <li>
                    <p
                        onClick={() => {
                            setMenu("work");
                            scrollToSection("mywork");
                        }}
                        className={menu === "work" ? "ping" : ""}
                    >Portfolio</p>
                    <img
                        src={nav_underline}
                        alt=''
                        className={menu === "work" ? 'show' : ''} />
                </li>
                <li>
                    <p
                        onClick={() => {
                            setMenu("contact");
                            scrollToSection("contact");
                        }}
                        className={menu === "contact" ? "ping" : ""}
                    >Contact</p>
                    <img
                        src={nav_underline}
                        alt=''
                        className={menu === "contact" ? 'show' : ''} />
                </li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div >
    )
}

export default Navbar;
