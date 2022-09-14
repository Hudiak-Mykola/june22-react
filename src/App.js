import './App.css';
import {characters} from "./components/ricki&morty/js/data";
import {Character} from "./components/ricki&morty/js/character";


function App() {
    return(
        <div className={'mainDiv'}>
            {
                characters.map(character=>(<Character character = {character} key = {character.id}/>))}
        </div>
    )
}
export default App;
