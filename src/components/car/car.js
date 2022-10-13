import {useDispatch} from "react-redux";
import {carAction} from "../../redux";




const Car = ({car}) => {
    const {id, price, year, model} = car;

    const dispatch = useDispatch()

    return (
        <div>
            <div>ID:{id}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <div>model:{model}</div>
            <button onClick={() => dispatch(carAction.setCarForUpdate(car))}>Update</button>
            <button onClick={() => dispatch(carAction.deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {
    Car
}