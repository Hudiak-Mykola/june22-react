import logo from './logo.svg';
import './App.css';
import CarForm from "./components/carForm/carForm";
import Cars from "./components/cars/cars";

function App() {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
}

export default App;
