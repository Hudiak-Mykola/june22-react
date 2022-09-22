import {axiosService} from "./axios.service";

import {urls} from "../configs";

const carService = {
    getAll:()=>axiosService.get(urls.cars),
    create:(cars)=>axiosService.post(urls.cars, cars),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    updateById:(id, car)=>axiosService.put(`${urls.cars}/${id}`, car)
}

export {carService}