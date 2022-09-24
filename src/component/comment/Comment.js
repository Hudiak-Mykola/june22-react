import {Link, Outlet} from "react-router-dom";


const Comment = ({comment}) => {

    const {id} = comment

    return (
        <div>
            <div>
                <Link to={`posts/${id}`}>{comment.id}  -  {comment.body}</Link>

            </div>
        </div>
    );
};

export default Comment;