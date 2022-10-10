
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import Post from "../post/Post";
import {postActions} from "../../redux/slices/post.slice";


const Posts = () => {

    const  {posts} = useSelector(state => state.postReducer)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(postActions.getAll())
    },[])

    return (
        <div>
            {
                posts.map(post=><Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;