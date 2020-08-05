import React from 'react'
import { connect } from 'react-redux'

const UserAvatar = ({ name, avatarURL }) => {

    return (
        <img
            src={avatarURL}
            className="avatar"
            alt={`Avatar of ${name}`}
        >
        </img>
    )
}

export default connect(({ users }, { userId }) => {

    const { name, avatarURL } = users[userId]

    return {
        name,
        avatarURL
    }
})(UserAvatar)