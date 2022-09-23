import {useEffect, useState} from "react";

import {Service} from "../../services";
import Comment from "../comment/Comment";


const Comments = () => {

    const [comments,setComments] = useState([])
    useEffect(()=>{
        Service.getComments().then(value => setComments(value.data))
    },[])
    return (

        <div>
            {
                comments.map(comment => <Comment key = {comment.id} comment = {comment}/>)
            }
        </div>
    );
};

export default Comments;