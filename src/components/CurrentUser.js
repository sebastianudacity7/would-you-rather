import React from 'react'
import { connect } from 'react-redux'
import { signOutUser } from '../actions/authUser'

import UserAvatar from './UserAvatar'

const CurrentUser = ({ user, dispatch }) => {

    const onSignOut = (e) => {
        e.preventDefault()
        dispatch(signOutUser())
    }

    if (!user) {
        return (<div></div>)
    }

    return (
        <span>
            <UserAvatar userId={user.id} />
            {user.name}
            <button onClick={onSignOut}>Sign out</button>
        </span>

    )
}

export default connect(({ users, authUser }) => ({
    user: users[authUser]
}))(CurrentUser)