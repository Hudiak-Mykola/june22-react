import {useEffect, useState} from "react";
import {Service} from "../../services";
import {useParams} from "react-router-dom";
import Post from "../post/Post";


const Posts = () => {
    const [post, setPost] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        Service.getPostById(id).then(({data}) => setPost(data))
    }, [id])
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export default Posts;