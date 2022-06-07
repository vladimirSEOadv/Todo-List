import React, {useEffect, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostsService from "./API/PostsService";
import Loader from "./components/UI/Loader/Loader";

//https://youtu.be/GNrdg3PzpJQ?t=5427
//https://github.com/utimur/react-fundamental-course/blob/master/src/hooks/usePosts.js

function App() {
    const [posts, setPosts] = useState([
            {id: 1, title: 'JavaScript', body: 'Description'},
            {id: 2, title: 'Python', body: 'Описание'},
            {id: 3, title: 'C++', body: 'Подпись'}
        ]
    )
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAdnSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [isPostLoading, setIsPostLoading] = useState(false)

    useEffect(() => {
        fetchPosts()
    },[])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts(){
        setIsPostLoading(true)
        setTimeout(async () => {
            console.log('timeout')
            const posts = await PostsService.getAll();
            setPosts(posts)
            setIsPostLoading(false);
        },5000)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <button onClick={fetchPosts}>GET POSTS</button>
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)} >
            Создать пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {isPostLoading
            ? <div style={{display: 'flex', justifyContent:'center', marginTop:'50px'}}><Loader/></div>
            : <PostList remove={removePost} posts={sortedAdnSearchedPosts} title={'Список постов 1'}/>
        }

    </div>
  );
}

export default App
