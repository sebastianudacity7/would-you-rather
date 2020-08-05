import React from 'react'
import { connect } from 'react-redux'

import { getScore } from '../api/user'

import UserAvatar from './UserAvatar'

const UserBadge = ({ name, score, questionCount, answerCount, userId }) => {

    return (
        <div>
            <div>
                <h3>{name}</h3>
                <UserAvatar userId={userId} />

            </div>

            <div>Questions: {questionCount}</div>
            <div>Answers: {answerCount}</div>
            <div>Score: {score} </div>
        </div>
    )
}

export default connect(({ users }, { id }) => {
    const user = users[id]
    return {
        name: user.name,
        questionCount: user.questions.length,
        answerCount: Object.keys(user.answers).length,
        userId: user.id,
        score: getScore(user)
    }
})(UserBadge)