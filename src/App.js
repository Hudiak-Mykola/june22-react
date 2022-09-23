import {Link, Route, Routes} from "react-router-dom";

import Home from "./Home";
import Comments from "./Comments";
import Todos from "./component/todos/Todos";
import Albums from "./component/albums/Albums";


function App() {
    return(
        <div>
            <div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to ={'/'}>Home</Link></li>
                    <li><Link to ={'/todos'}>Todos</Link></li>
                    <li><Link to ={'/albums'}>Albums</Link></li>
                    <li><Link to={'/comments'}>Comments</Link></li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element = {<Albums/>}/>
                    <Route path={'/comments'} element = {<Comments/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
