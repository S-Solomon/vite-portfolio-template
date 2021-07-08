import React from 'react' ;
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Your Name</h1>
                <p>Based in Your City</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And lets get down to work</p>
            </div>
            <div className="footer-social">
                <div className="design-by">
                    Design By Your Name
                </div>
                <div className="social-links">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://stackoverflow.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-stack-overflow stackoverflow"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-github-square github"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
