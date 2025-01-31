import React from 'react'
import { connect } from 'react-redux'

import { getScore } from '../api/user'

import UserAvatar from './UserAvatar'

import ScoreTag from './ScoreTag'

const UserBadge = ({ name, score, questionCount, answerCount, userId }) => {

    return (
        <div>
            <div>
                <UserAvatar userId={userId} />
            </div>
            <div>{name}</div>
            <div className="scoreTag">
                <ScoreTag score={score} />
            </div>

            <div>
                <span className="label">Questions: {questionCount}</span>
                <span className="label">Answers: {answerCount}</span>
            </div>

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