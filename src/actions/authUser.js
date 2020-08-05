export const SET_AUTH_USER = 'SET_AUTH_USER'
export const SIGN_OUT_USER = 'SIGN_OUT_USER'

export const setAuthUser = (authUser) => ({
    type: SET_AUTH_USER,
    authUser
})

export const signOutUser = () => ({
    type: SIGN_OUT_USER
})