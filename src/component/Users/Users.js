import {useEffect, useState} from "react";

import {userService} from "../../services";
import User from "../User/User";
import UserForm from "../UserForm/UserForm";


function Users() {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        userService.getAll().then(value => {console.log(value.data)
            setUsers(value.data)
        })

    },[ ])

    return(
        <div className={'mainDiv'}>
            <UserForm setUsers={setUsers}/>
            <hr/>
            {users.map((user,id)=> (<User user={user} key={id}/>))}
        </div>
    )
}


export default Users;