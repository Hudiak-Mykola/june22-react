import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Service} from "../../services";
import Post from "../post/Post";
import '../style.css'


const Posts = () => {
    const [post, setPost] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        Service.getPostById(id).then(({data}) => setPost(data))
    }, [id])
    return (
        <div className={'posts'}>
            {<Post post={post}/>}
        </div>
    );
};

export default Posts;