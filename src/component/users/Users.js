import {useEffect, useState} from "react";

import {Service} from "../../services/service";



const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        Service.getUsers().
    },[])
    return (
        <div>

        </div>
    );
};

export default Users;