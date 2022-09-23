import {Link, Outlet} from "react-router-dom";


const Layout = () => {
    return (
        <div>
            <div>
                <ol>
                    <ul><Link to = {'/layout/users'}>Users</Link></ul>
                    <ul><Link to = {'/layout/posts'}>All posts</Link></ul>
                    <ul><Link to = {'/layout/comments'}>Comments</Link></ul>
                </ol>
            </div>
            <Outlet/>
        </div>
    );
};

export default Layout;