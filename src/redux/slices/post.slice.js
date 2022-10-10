import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../../services";

const initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null
}
const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const{data} = await postsService.getAll()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        }
    },
    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            state.posts = action.payload
        }
    }
})

const {reducer: postReducer, actions: {setCurrentPost}} = postSlice

const postActions = {
    getAll,
    setCurrentPost
}

export {
    postReducer,
    postActions
}