import {useEffect, useState} from "react";
import User from "./User";
import UserInfo from "./User-info";
export default function Users (){
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    const lift =(obj)=>{
        setUser(obj)
    }

   useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/users/`)
           .then(value => value.json())
           .then(value => {
               setUsers(value)
           })

   },[ ])

    return(
        <div>
            <hr/>
            {user &&<UserInfo user={user}/>}
            <hr/>
            {users.map((user,index)=>(<User user={user} key={index} lift={lift}/>))}
        </div>
    )
}

