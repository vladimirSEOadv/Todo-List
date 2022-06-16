import React from 'react';

const PostComments = (props) => {

    return (
        <div>
            <h2 style={{display: "flex", justifyContent: "left", margin: "15px 0px 10px 10px"}}>Комментарии к посту:</h2>
            {props.commentsByPost.map((commentData, key) =>
                <ul key={Date.now()+key} style={{padding: "10px 0 10px 15px", border: "2px dashed black", textDecoration: 'none', margin: "10px"}}>
                    <li style={{listStyleType: 'none'}}>Name: {commentData.name}</li>
                    <li style={{listStyleType: 'none'}}>Id: {commentData.id}</li>
                    <li style={{listStyleType: 'none'}}>Email: {commentData.email}</li>
                    <li style={{listStyleType: 'none'}}>Body: {commentData.body}</li>
                </ul>
            )}
        </div>
    );
};

export default PostComments;