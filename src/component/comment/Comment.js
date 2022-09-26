import {Link} from "react-router-dom";

import '../style.css'

const Comment = ({comment}) => {

    const {postId} = comment

    return (
        <div>
            <div className={'comment'}>
                <Link to={`posts/${postId}`}  >{comment.id}  -  {comment.body} </Link>
            </div>
        </div>
    );
};

export default Comment;