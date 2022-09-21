import {useForm} from "react-hook-form";

import {userService} from "../../services";


const ComentForm = () => {
    const {register, handleSubmit} = useForm()

    const submit = async (user) => {
         const {data} = await userService.create(user)
        console.log(data)
    };
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'comment'} {...register('comment')}/>
            <button>Save</button>
        </form>
    );
};

export default ComentForm;