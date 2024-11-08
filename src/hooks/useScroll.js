import { useEffect, useState } from 'react';

export function useScroll(threshold) {
    const [attribute, setAttribute] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > threshold && !attribute) {
                setAttribute(true);
            }
            else if (scrollY < threshold && attribute) { setAttribute(false); }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [attribute]);

    return attribute;
}