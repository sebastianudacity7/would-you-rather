import React from 'react'
import { connect } from 'react-redux'

import { signOutUser } from '../actions/authUser'

import UserAvatar from './UserAvatar'
import ScoreTag from './ScoreTag'
import { Button} from "@blueprintjs/core"

import { getScore } from '../api/user'

const CurrentUser = ({ userId, userName,score, dispatch }) => {

    const onSignOut = (e) => {
        e.preventDefault()
        dispatch(signOutUser())
    }

    if (!userId) {
        return (<div></div>)
    }

    return (
        <span className="curentUser">
            <span>{userName}</span>
            <UserAvatar userId={userId} />
            <ScoreTag score={score} />
            <Button minimal={true} onClick={onSignOut}>Sign out</Button>
        </span>
    )
}

export default connect(({ users, authUser }) => ({
    userId: authUser,
    userName: users[authUser].name,
    score: getScore(users[authUser])
}))(CurrentUser)