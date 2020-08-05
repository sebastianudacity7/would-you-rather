import { getUsers } from '../api/api'

export const SET_USERS = 'SET_USERS'

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export const loadUsersAsync = () => (dispatch) => {
    return getUsers()
        .then((users) => { dispatch(setUsers(users)) })
}