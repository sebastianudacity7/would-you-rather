import React from 'react'
import { connect } from 'react-redux'

import { signOutUser } from '../actions/authUser'

import UserAvatar from './UserAvatar'

const CurrentUser = ({ userId, userName, dispatch }) => {

    const onSignOut = (e) => {
        e.preventDefault()
        dispatch(signOutUser())
    }

    if (!userId) {
        return (<div></div>)
    }

    return (
        <span>
            <UserAvatar userId={userId} />
            {userName}
            <button onClick={onSignOut}>Sign out</button>
        </span>
    )
}

export default connect(({ users, authUser }) => ({
    userId: authUser,
    userName: users[authUser].name
}))(CurrentUser)