import React from 'react'
import './MyWork.sass'
import { theme_pattern, mywork_data, arrow_icon } from '../../assets'
const MyWork = () => {
    return (
        <div id='mywork' className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork