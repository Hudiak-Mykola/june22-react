import {useEffect, useState} from "react";

import {comentService} from "../../services";
import ComentForm from "../ComentForm/ComentForm";
import Coment from "../Coment/Coment";


function Coments() {
    const [coments,setComents]=useState([])

    useEffect(()=>{
        comentService.getAll().then(value => {console.log(value.data)
            setComents(value.data)
        })

    },[ ])

    return(
        <div className={'mainDiv'}>
            <ComentForm setComents={setComents}/>
            <hr/>
            {coments.map((coment,id)=> (<Coment coment={coment} key={id}/>))}
        </div>
    )
}


export default Coments;