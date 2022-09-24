import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {Service} from "../../services";
import Comment from "../comment/Comment";


const Comments = () => {

    const [comment, setComment] = useState([])

    useEffect(() => {
        Service.getComments().then(value => setComment(value.data))
    }, [])
    return (

        <div>
            <Outlet/>
            <div>
                {
                    comment.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
        </div>
    );
};

export default Comments;