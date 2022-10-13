import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import {Car} from "../car/car";
import {carAction} from "../../redux";




const Cars = () => {
    const {cars} = useSelector(state => state.carReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(carAction.getAll())
    }, [])
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export default Cars;