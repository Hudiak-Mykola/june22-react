import {axiosService} from "./axios.service";
import {urls} from "../config";

const PostsService = {
    getAll: () => axiosService.get(urls.posts)
};
export {
    PostsService
}