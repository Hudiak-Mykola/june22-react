const commentReducer = (state = {comments: []}, action)=>{

    switch (action.type) {
        case 'load_comments':
            return {...state, comments:action.payload}
    }
    return state

}

export {
    commentReducer
}