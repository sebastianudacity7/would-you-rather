import React from 'react'
import { connect } from 'react-redux'

import { getScore } from '../api/user'

const UserBadge = ({ name, score, questionLength, answerLength, avatarURL }) => {

    return <div>
        <div>
            <img
                src={avatarURL}
                className="avatar"
                alt={`Avatar of ${name}`}
            >
            </img>
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
        avatarURL: user.avatarURL,
        score: getScore(user)
    }
})(UserBadge)