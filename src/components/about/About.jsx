import React from 'react' ;
import './About.css' ;
// import avatar from '../../assets/avatar.jpg' ;
import removeBg from '../../assets/removebg.png' ;

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores optio iste repellat ab molestias, non esse. Consectetur iste iure rem, qui sed saepe debitis eligendi nam cum, eum eaque ea!</p>
            </div>
            <div className="about-img">
                <img src={removeBg} alt="about" />
            </div>
        </div>
    )
}

export default About
