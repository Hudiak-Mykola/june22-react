import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {usersService} from "../../services";

import User from "../user/User";
import {userActions} from "../../redux";


const Users = () => {

    const  {users} = useSelector(state => state.userReducer)

    const dispatch = useDispatch()



    useEffect(()=>{
      usersService.getAll().then(({data})=>dispatch(userActions.getAll(data)))
    },[])

    return (
        <div>
            {
                users.map(user=><User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;