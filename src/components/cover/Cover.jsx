import React from 'react';
import coverVideo from '../../assets/coverVideo.mp4' ;
import './Cover.css' ;

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted></video>
            <h1>Name LastName</h1>
            <p>Developer | Designer | Content Creator</p>
        </div>
    )
}

export default Cover
