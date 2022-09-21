import {useForm} from "react-hook-form";
import {userService} from "../../services";




const UserForm = (props) => {
    let {setUsers} = props;
    const {register,reset, handleSubmit} = useForm()

    const submit = async (user) => {
         const {data} = await userService.create(user)
        setUsers(users=>[...users, data])
        reset()
    };
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'phone'} {...register('phone')}/>
            <button>Save</button>
        </form>
    );
};

export default UserForm;