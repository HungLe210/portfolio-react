'use client';
import React, { useEffect, useState } from 'react';
import './styles.sass'
import { IoIosArrowUp } from "react-icons/io";

import { useScroll } from '../../../hooks/useScroll';

export function ScrollTopButton() {
    const attribute = useScroll(1000);

    return (
        <a href='#nav' className={`scroll ${attribute ? 'appear' : ''} `}>
            <IoIosArrowUp className='scroll-arrow' />
        </a >
    );
};


