import React, { useMemo, useState } from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

//https://youtu.be/GNrdg3PzpJQ?t=4949
//https://github.com/utimur/react-fundamental-course/blob/master/src/hooks/usePosts.js

function App() {
    const [posts, setPosts] = useState([
            {id: 1, title: 'JavaScript', body: 'Description'},
            {id: 2, title: 'Python', body: 'Описание'},
            {id: 3, title: 'C++', body: 'Подпись'}
        ]
    )
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAdnSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}/>
        {sortedAdnSearchedPosts.length
               ?
               <PostList remove={removePost} posts={sortedAdnSearchedPosts} title={'Список постов 1'}/>
               :
               <h1 style={{textAlign: 'center'}}>
                   Посты не найдены
               </h1>
        }

    </div>
  );
}

export default App
