import React from 'react';
import {Link} from "react-router-dom";

const SinglePost = ({body, title, id}) => {
    return (
        <div>
            <div><Link to="/">Главная</Link> / <Link to="/posts-page">Посты</Link> / Пост №{id}</div>
            <h1>Пост №{id}</h1>
            <h3>Заголовок поста: {title}</h3>
            <div>Текст поста: {body}</div>
        </div>
    );
};

export default SinglePost;