import {useEffect, useState} from "react";


import CarForm from "../CarForm/CarForm";

import {carService} from "../../services";
import Car from "../Car/Car";


function Cars() {
    const [cars,setCars]=useState([])

    useEffect(()=>{
        carService.getAll().then(value => {console.log(value.data)
            setCars(value.data)
        })

    },[ ])

    return(
        <div className={'mainDiv'}>
            <CarForm setCars={setCars}/>
            <hr/>
            {cars.map((car,id)=> (<Car car={car} key={id} setCars={setCars}/>))}
        </div>
    )
}


export default Cars;