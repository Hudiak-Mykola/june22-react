const userReducer = (state = {users: [], user: null}, action)=>{

    switch (action.type) {
        case 'load_users':
            return {...state, users:action.payload}
        case 'LOAD_SINGLE_USER':
            const user = state.users.find(user => user.id === action.payload);
            return {...state, user};

    }
    return state

}
export {
    userReducer
}