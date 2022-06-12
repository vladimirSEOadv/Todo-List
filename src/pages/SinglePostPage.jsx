import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostsService from "../API/PostsService";
import Loader from "../components/UI/Loader/Loader";
import SinglePost from "../components/SinglePost";


const SinglePostPage = () => {
    const [postData, setPostData] = useState({})
    const params = useParams()
    const pageId = params.id

    const [fetchPosts, isPostLoading, postError] = useFetching(async (pageId) => {
        const responce = await PostsService.getPostOfId(pageId);
        setPostData(responce.data)
        console.log(responce)
    })

    useEffect(() => {
        fetchPosts(pageId)
    },[pageId])


    return (
        <div>
            {isPostLoading
                ? <div style={{display: 'flex', justifyContent:'center', marginTop:'50px'}}><Loader/></div>
                : <SinglePost id={postData.id} title={postData.title} body={postData.body}/>
            }
        </div>
    );
};

export {SinglePostPage};