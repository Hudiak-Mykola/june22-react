import {useEffect, useState} from "react";

import {userService} from "../../services";
import ComentForm from "../ComentForm/ComentForm";
import Coment from "../Coment/Coment";


function Coments() {
    const [coments,setComents]=useState([])

    useEffect(()=>{
        userService.getAll().then(value => {console.log(value.data)
            setComents(value.data)
        })

    },[ ])

    return(
        <div className={'mainDiv'}>
            <ComentForm/>
            <hr/>
            {coments.map((coment,id)=> (<Coment coment={coment} key={id}/>))}
        </div>
    )
}


export default Coments;