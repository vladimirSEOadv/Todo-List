import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import PostsPage from "../pages/PostsPage";
import PageNotFound from "../pages/PageNotFound";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts-page" element={<PostsPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
};

export default AppRouter;