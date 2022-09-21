import {axiosService} from "./axios.service";

import {urls} from "../configs";

const comentService = {
    getAll:()=>axiosService.get(urls.comments),
    create:(comments)=>axiosService.post(urls.comments, comments)
}

export {comentService}