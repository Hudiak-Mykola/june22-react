import {Route, Routes} from "react-router-dom";

import Users from "../component/users/Users";
import Posts from "../component/posts/Posts";
import Comments from "../component/comments/Comments";
import {SingleUserComponent} from "../component/singleUserComponent/SigleUsersComponent";

let Navigation = (
    <Routes>
        <Route path={'/users'} element={<Users/>}/>
        <Route path={'/posts'} element={<Posts/>}/>
        <Route path={'/comments'} element={<Comments/>}/>
        <Route path={'users/:id'} element={<SingleUserComponent/>}/>

    </Routes>
)
export {
    Navigation
}