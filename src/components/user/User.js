import {useDispatch} from "react-redux";

import {userActions} from "../../redux";


const User = ({user}) => {

    const dispatch = useDispatch();

    const {id, name, surname}=user
    return (
        <div>
           <div>id:{id}</div>
           <div>name:{name}</div>
           <div>surname:{surname}</div>
            <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>select</button>
        </div>
    );
};

export default User;