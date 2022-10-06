import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Post from "../post/Post";
import {PostsService} from "../../services";


const Posts = () => {
    let state = useSelector(state => state.postReducer.posts)

    const dispatch = useDispatch();

    useEffect(() => {
        PostsService.getAll().then(value => {
            dispatch({type: 'load_posts', payload: value.data})
        })
    }, [])

    return (
        <div>
            {
                state.map(post=><Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;

