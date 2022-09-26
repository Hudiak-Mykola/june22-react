import {Link, Route, Routes} from "react-router-dom";

import './App.css'
import Home from "./component/home/Home";
import Comments from "./component/comments/Comments";
import Todos from "./component/todos/Todos";
import Albums from "./component/albums/Albums";
import Posts from "./component/posts/Posts";
import Post from "./component/post/Post";


function App() {
    return (
        <div>
            <div className={'app'}>


                    <button><Link to={'/'}>Home</Link></button>
                    <button><Link to={'/todos'}>Todos</Link></button>
                    <button><Link to={'/albums'}>Albums</Link></button>
                    <button><Link to={'/comments'}>Comments</Link></button>

            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={'posts'} element={<Posts/>}>
                            <Route path={':id'} element={Post}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;
