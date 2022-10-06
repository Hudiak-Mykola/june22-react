import {axiosService} from "./axios.service";
import {urls} from "../config";

const UsersService = {
    getAll: () => axiosService.get(urls.users)
};
export {
    UsersService
}