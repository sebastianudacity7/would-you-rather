import React from 'react'
import { connect } from 'react-redux'
import { signOutUser } from '../actions/authUser'

const CurrentUser = ({ user, dispatch }) => {

    const onSignOut = (e) => {
        e.preventDefault()
        dispatch(signOutUser())
    }

    if(!user) {
        return (<div></div>)
    }

    return (
        <span>
                       
            <img
                src={user.avatarURL}
                className="avatar"
                alt={`Avatar of ${user.name}`}
            >
            </img>
            {user.name}
            <button onClick={onSignOut}>Sign out</button>
        </span>

    )
}

export default connect(({users, authUser }) => ({
    user:users[authUser]
}))(CurrentUser)