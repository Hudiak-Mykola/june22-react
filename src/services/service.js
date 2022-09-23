import {axiosServices} from "./axios.services";
import {urls} from "../config";

const Service = {
    getTodos: () => axiosServices.get(urls.todos),
    getComments: () => axiosServices.get(urls.comments),
    getAlbums: () => axiosServices.get(urls.albums),
};
export {
    Service
}