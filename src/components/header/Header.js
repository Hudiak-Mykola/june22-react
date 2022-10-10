import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import css from './Header.module.css'

const Header = ({user}) => {
    const {currentUser} = useSelector(state => state.userReducer);
    const {currentPost} = useSelector(state => state.postReducer);
    return (
        <div>
            <div className={css.Header}>
                {currentUser && currentUser.name}
                {currentPost && currentPost.title}
            </div>
            <div className={css.Navigation}>
                <button><Link to={'/users'}>Users</Link></button>
                <button><Link to={'/posts'}>Posts</Link></button>
            </div>
        </div>
    );
};

export default Header;