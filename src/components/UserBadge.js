import React from 'react'
import { connect } from 'react-redux'

import { getScore } from '../api/user'

import UserAvatar from './UserAvatar'

const UserBadge = ({ name, score, questionLength, answerLength, userId }) => {

    return <div>
        <div>
            <UserAvatar userId={userId}/>
            <h3>{name}</h3>
        </div>

        <div>Questions: {questionLength}</div>
        <div>Answers: {answerLength}</div>
        <div>Score: {score} </div>
    </div>
}

export default connect(({ users }, { id }) => {
    const user = users[id]
    return {
        name: user.name,
        questionLength: user.questions.length,
        answerLength: Object.keys(user.answers).length,
        userId: user.id,
        score: getScore(user)
    }
})(UserBadge)