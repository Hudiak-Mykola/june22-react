import {useForm} from "react-hook-form";

import {carService} from "../../services";



const CarForm = (props) => {
    let {setCars} = props;
    const {register, handleSubmit, reset} = useForm()

    const submit = async (user) => {
         const {data} = await carService.create(user)
        setCars(cars=>[...cars,data])
        reset()
        console.log(data)
    };
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export default CarForm;