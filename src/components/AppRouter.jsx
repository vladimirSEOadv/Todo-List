import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import PostsPage from "../pages/PostsPage";
import PageNotFound from "../pages/PageNotFound";
import {SinglePostPage} from "../pages/SinglePostPage";
import MainPage from "../pages/MainPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts-page" element={<PostsPage/>}/>
            <Route path="/posts-page/:id" element={<SinglePostPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
};

export default AppRouter;