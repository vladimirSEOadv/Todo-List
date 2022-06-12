import React from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>Главная страница</h1>
            <Link to={'/posts-page'}>Посты</Link>
            <Link style={{marginLeft: '10px'}} to={'/about'}>О нас</Link>
        </div>
    );
};

export default MainPage;