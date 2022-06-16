import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostsService from "../API/PostsService";
import Loader from "../components/UI/Loader/Loader";
import SinglePost from "../components/SinglePost";
import PostComments from "../components/PostComments";


const SinglePostPage = () => {
    const [postData, setPostData] = useState({})
    const [commentsByPost, setCommentsByPost] = useState([])
    const params = useParams()
    const postId = params.id

    const [fetchPosts, isPostLoading, postError] = useFetching(async (postId) => {
        const response = await PostsService.getPostById(postId);
        setPostData(response.data)
    })

    const [fetchComments, isCommentLoading, CommentError] = useFetching(async (postId) => {
        const response = await PostsService.getPostCommentsByPostId(postId);
        setCommentsByPost(response.data)
    })

    useEffect(() => {
        fetchPosts(postId)
        fetchComments(postId)
    },[postId])

    return (
        <div>
            {isPostLoading
                ? <div style={{display: 'flex', justifyContent:'center', marginTop:'50px'}}><Loader/></div>
                : <SinglePost id={postData.id} title={postData.title} body={postData.body}/>
            }
            {isCommentLoading
                ? <div style={{display: 'flex', justifyContent:'center', marginTop:'150px'}}><Loader/></div>
                : <PostComments commentsByPost={commentsByPost} />
            }
        </div>
    );
};

export {SinglePostPage};