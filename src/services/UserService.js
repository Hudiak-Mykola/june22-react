import {axiosService} from "./axios.service";

import {urls} from "../configs";

const userService = {
    getAll:()=>axiosService.get(urls.comments),
    create:(comments)=>axiosService.post(urls.comments, comments)
}

export {userService}