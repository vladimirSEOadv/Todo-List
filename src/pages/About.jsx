import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>
            <div style={{left: 0}}><Link to="/">Главная</Link> / О компании</div>
            <h1 style={{display:"flex", justifyContent:"center"}}>
                О кампании
            </h1>
        </div>

    );
};

export default About;