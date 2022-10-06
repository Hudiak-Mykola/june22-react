import {Link} from "react-router-dom";

import './header.css'


const Header = () => {
    return (
        <div className={'header'}>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/comments'}>Comments</Link>
        </div>
    );
};

export default Header;