import {axiosService} from "./axios.service";
import {urls} from "../config";

const Service = {
    getUsers: () => axiosService.get(urls.users),
    getPosts: () => axiosService.get(urls.posts),
    getComments: () => axiosService.get(urls.comments)
};
export {
    Service
}