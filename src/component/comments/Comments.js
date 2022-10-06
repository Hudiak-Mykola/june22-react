import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Comment from "../comment/Comment";
import {CommentService} from "../../services";


const Comments = () => {
    let state = useSelector(state => state.commentReducer.comments)

    const dispatch = useDispatch();

    useEffect(() => {
        CommentService.getAll().then(value => {
            dispatch({type: 'load_comments', payload: value.data})
        })
    }, [])


    return (
        <div>
            {
                state.map(comment=><Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;