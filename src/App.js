import {Route, Routes} from "react-router-dom";

import './App.css';
import Header from "./components/header/Header";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

function App() {
    return (
        <div>
            <div>
                <Header/>
                <div>
                    <Routes>
                        <Route path={'/users'} element ={<Users/>}/>
                        <Route path={'/posts'} element = {<Posts/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
