import {useEffect, useState} from "react";

import Launch from "./Launch";
import infoSpaceX from "../../services/axios.service";

export default function Launchs (){
    let [launchs, setLaunchs] = useState([]);


    useEffect(()=>{
        infoSpaceX().then(value => {console.log(value)
                setLaunchs(value.data)
            })

    },[ ])

    return(
        <div className={'mainDiv'}>
            {launchs.filter(({launch_year})=>launch_year!=='2020').map((launch,index)=>
                (<Launch launch={launch} key={index}/>))}

        </div>
    )
}
