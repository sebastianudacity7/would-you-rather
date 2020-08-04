import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import QuestionOption from './QuestionOption'

const Question = ({ question }) => {

    const { id, optionOne, optionTwo } = question

    const history = useHistory();

    const onShowDetails = (e) => {
        e.preventDefault()
        history.push(`/poll/${id}`)
    }

    return (
        <div onClick={onShowDetails} className="question">

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