import React from 'react';
import {Link} from "react-router-dom";

const SinglePost = ({body, title, id}) => {
    return (
        <div style={{margin: "10px 0 0px 10px"}}>
            <div><Link to="/">Главная</Link> / <Link to="/posts-page">Посты</Link> / Пост №{id}</div>
            <div style={{margin: "5px 0 0px 0px"}} >
                <h1>Пост №{id}</h1>
                <h4>Заголовок поста: {title}</h4>
                <div>Текст поста: {body}</div>
            </div>
        </div>
    );
};

export default SinglePost;