export const ADD_USERS = 'ADD_USERS'

export const addUsers = (users) => ({
    type:ADD_USERS,
    users
})

export const addUsersAsync = () => (dispatch) => {
    const users = {
        sbor: {  id:'sbor', name: 'sbor'},
        sbor2: { id:'sbor2',name: 'sbor2'},
    }
    dispatch(addUsers(users))
}