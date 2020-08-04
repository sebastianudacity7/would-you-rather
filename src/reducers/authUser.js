import { SET_AUTH_USER, SIGN_OUT_USER } from '../actions/authUser'

export const authUser = (state = "johndoe", action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return action.authUser
        case SIGN_OUT_USER:
            return null
        default:
            return state
    }
}

