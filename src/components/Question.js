import React from 'react'
import { connect } from 'react-redux'

import QuestionOption from './QuestionOption'

const Question = ({ question }) => {

    const { optionOne, optionTwo } = question

    return (
        <div>
            <h3>Would you rather:</h3>
            <QuestionOption option="A" text={optionOne.text} />
            <QuestionOption option="B" text={optionTwo.text} />
        </div>
    )
}


export default connect(({ questions }, { id }) => {
    return {
        question: questions[id]
    }
})(Question)