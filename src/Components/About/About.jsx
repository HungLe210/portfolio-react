import React from 'react'
import './About.sass'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum assumenda facere incidunt, consequuntur at corporis esse consectetur quaerat sit beatae cupiditate reprehenderit excepturi fuga maxime tempora, ipsum, veniam possimus.
                            Saepe eveniet reprehenderit accusamus praesentium cupiditate officiis laboriosam neque minima doloribus repellendus vero unde ipsa voluptatibus, adipisci libero provident ea assumenda ad sapiente nesciunt cum quas possimus earum consectetur? Ratione!</p>
                        <p>My passion is lies Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum perferendis illo nemo illum, necessitatibus, impedit iusto vel quasi doloremque saepe fugiat ex eius at ab laboriosam tempore, sed optio nesciunt!
                            Nemo non quasi explicabo aliquam ratione. Eligendi soluta velit sit fuga a placeat cum iste, ut error temporibus laboriosam recusandae corporis. Qui, unde. Laborum quis debitis sapiente, repudiandae incidunt amet!</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill"><p>React Js</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />

                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About