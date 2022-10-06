import {combineReducers} from "redux";

import {userReducer} from "./userReducer";
import {commentReducer} from "./commentReducer";
import {postReducer} from "./postReducer";

let reducer = combineReducers({
    userReducer,
    commentReducer,
    postReducer
})
export {
    reducer
}