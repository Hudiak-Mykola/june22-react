import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import User from "../user/User";
import {UsersService} from "../../services";


const Users = () => {

    let  state = useSelector(state => state.userReducer.users)

    let dispatch = useDispatch();

    useEffect(() => {
        UsersService.getAll().then(value => {
            dispatch({type: 'load_users', payload: value.data})
        })
    }, [])
    return (
        <div>
            {
                state.map(user=><User key = {user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;