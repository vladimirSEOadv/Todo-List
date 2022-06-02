import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) => {
        if(post.title === '' && post.body === ''){
            e.preventDefault()
            alert("Заполните поля формы")
        }else if(post.title === ''){
            e.preventDefault()
            alert("Заполните поле названия")
        }else if(post.body === ''){
            e.preventDefault()
            alert("Заполните поле описания")
        }else {
            e.preventDefault()
            const newPost = {
                ...post, id: Date.now()
            }
            create(newPost)
            setPost({title:'', body:''})
        }

    }
    return (
        <form>
            <MyInput
                label={'Название поста'}
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                label={'Описание поста'}
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text" placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;