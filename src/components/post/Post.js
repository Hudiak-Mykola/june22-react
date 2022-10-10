import {postActions} from "../../redux/slices/post.slice";
import {useDispatch} from "react-redux";


const Post = ({post}) => {
    const dispatch = useDispatch()
    const {id, body,title} =post
    return (
        <div>
            <div>id:{id}</div>
            <div>body:{body}</div>
            <div>title:{title}</div>
            <button onClick={()=>dispatch(postActions.setCurrentPost(post))}>select</button>
        </div>
    );
};

export default Post;