import React, {useEffect, useRef, useState} from 'react';
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostsService from "../API/PostsService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import PostList from "../components/PostList";
import {useObserver} from "../hooks/useObserver";

function PostsPage() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(1)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAdnSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()


    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostsService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
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
            {postError &&
            <h1 style={{backgroundColor: 'red', padding: 25, marginTop: 25}}>Произошла ошибка ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAdnSearchedPosts} title={'Список постов 1'}/>
            <div ref={lastElement}/>
            {isPostLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
            }
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
                limit={limit}/>
        </div>
    );
}

export default PostsPage