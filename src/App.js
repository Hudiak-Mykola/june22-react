
import './App.css';

import './navigation/Navigation'
import {Navigation} from "./navigation/Navigation";
import Header from "./component/header/Header";


function App() {

    return (
        <div>
            <div className="main_header">
                <Header/>
            </div>
            <div>
                {Navigation}
            </div>
        </div>
    );
}

export default App;
