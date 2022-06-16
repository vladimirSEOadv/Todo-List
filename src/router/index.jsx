import MainPage from "../pages/MainPage";
import About from "../pages/About";
import PostsPage from "../pages/PostsPage";
import {SinglePostPage} from "../pages/SinglePostPage";
import PageNotFound from "../pages/PageNotFound";
import React from "react";
import Login from "../pages/Login";

export const privateRouts = [
    {path: '/', element: <MainPage/>},
    {path: '/about', element: <About/>},
    {path: '/posts-page', element: <PostsPage/>},
    {path: '/posts-page/:id', element: <SinglePostPage/>},
    {path: '*', element: <PageNotFound/>}
]

export const publicRouts = [
    {path: '/login', element: <Login/>},
    {path: '/', element: <Login/>},
    {path: '*', element: <Login/>}
]