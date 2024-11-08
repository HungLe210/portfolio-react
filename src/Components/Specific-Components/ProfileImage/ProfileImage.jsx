import React, { useState } from 'react'
import { profile_avatar } from '../../../assets'
import './ProfileImage.sass'

const ProfileImage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className="hero-image-wrapper" style={{ position: 'relative', width: '320px', height: '320px' }}>
            {/* Skeleton loader */}
            {!isLoaded && (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        backgroundColor: '#e0e0e0', // Màu nền cho skeleton
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                />
            )}

            {/* Lazy loaded image */}
            <img
                src={profile_avatar}
                alt="Profile Avatar"
                loading="lazy" // Lazy loading
                onLoad={() => setIsLoaded(true)} // Ẩn skeleton khi ảnh tải xong
                style={{
                    width: '320px',
                    height: 'auto',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: isLoaded ? 'block' : 'none', // Ẩn ảnh đến khi tải xong
                }}
            />
        </div>
    )
}

export default ProfileImage