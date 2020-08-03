import {SET_AUTH_USER} from '../actions/authUser'

export const authUser = (state = null,action) => {
    switch (action.type) {
        case SET_AUTH_USER: 
            return action.authUser
        default:
            return state
    }
}

