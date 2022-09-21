import {useForm} from "react-hook-form";

import {comentService} from "../../services";



const ComentForm = (props) => {
    let {setComents} = props;
    const {register, handleSubmit} = useForm()

    const submit = async (user) => {
         const {data} = await comentService.create(user)
        setComents(coments=>[...coments,data])
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