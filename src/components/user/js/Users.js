import {useEffect, useState} from "react";
import User from "./User";
import UserInfo from "./User-info";
import getUsers from "../../services/user.service";
export default function Users (){
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    const lift =(obj)=>{
        setUser(obj)
    }

   useEffect(()=>{
      getUsers()
           .then(value => {
               setUsers(value)
           })

   },[ ])

    return(
        <div className={'main'}>

            {user &&<UserInfo user={user}/>}

           <div className={'userMain'}> {users.map((user,index)=>(<User user={user} key={index} lift={lift}/>))}</div>
        </div>
    )
}

