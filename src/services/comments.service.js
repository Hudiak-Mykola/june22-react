import {axiosService} from "./axios.service";
import {urls} from "../config";

const CommentService = {
    getAll: () => axiosService.get(urls.comments)
};
export {
   CommentService
}