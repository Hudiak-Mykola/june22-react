const postReducer = (state = {posts: []}, action)=>{

    switch (action.type) {
        case 'load_posts':
            return {...state, posts:action.payload}

    }
    return state

}
export {
    postReducer
}