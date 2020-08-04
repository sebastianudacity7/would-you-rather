import {getUsers} from '../api'

export const ADD_USERS = 'ADD_USERS'

export const addUsers = (users) => ({
    type:ADD_USERS,
    users
})

export const loadUsersAsync = () => (dispatch) => {

    return getUsers()
        .then((users) => {dispatch(addUsers(users))})
}