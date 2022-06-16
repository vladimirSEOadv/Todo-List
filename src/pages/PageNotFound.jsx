import React from 'react';
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div style={{margin:"15%", padding: "5%", border: "3px solid teal"}}>
            <h1 style={{color:"red"}}>Страница не существует</h1>
                <p style={{display: "flex", justifyContent: "center"}}>Page not found. Go  <Link style={{marginLeft:"5px", fontWeight: "Bold", textDecoration: "none", color: "#009688"}} to="/posts-page">Post page</Link></p>
        </div>
    );
};

export default PageNotFound;