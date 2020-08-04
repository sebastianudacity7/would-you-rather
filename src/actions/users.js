import {getUsers} from '../api'

export const ADD_USERS = 'ADD_USERS'

export const addUsers = (users) => ({
    type:ADD_USERS,
    users
})

export const addUsersAsync = () => (dispatch) => {

    return getUsers()
        .then((users) => {dispatch(addUsers(users))})
}