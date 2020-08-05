import React from 'react'
import { connect } from 'react-redux'

import { signOutUser } from '../actions/authUser'

import UserAvatar from './UserAvatar'
import { Button} from "@blueprintjs/core"


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
            <span>{userName}</span>
            <UserAvatar userId={userId} />
            <Button minimal={true} onClick={onSignOut}>Sign out</Button>
        </span>
    )
}

export default connect(({ users, authUser }) => ({
    userId: authUser,
    userName: users[authUser].name
}))(CurrentUser)