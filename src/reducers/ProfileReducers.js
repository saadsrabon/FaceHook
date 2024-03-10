

export const ProfileReducers =( state, action) => {
    switch (action.type) {
        case 'START_FETCH_PROFILE':
            return {
                ...state,
                loading: true,
                
            }
        case 'FETCH_PROFILE_SUCCESS':
            return {
                ...state,
                loading: false,
                user: action.payload?.user,
                posts: action.payload?.posts,
            }
        default:
            return state
    }
}


