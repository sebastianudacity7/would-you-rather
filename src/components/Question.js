import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import QuestionOption from './QuestionOption'
import QuestionVotingPanel from './QuestionVotingPanel'


const Question = ({ question, isOneSelected, isTowSelected }) => {

    const history = useHistory();

    const { id, optionOne, optionTwo } = question

    const isAnswered = isOneSelected || isTowSelected

    const onShowDetails = (e) => {
        e.preventDefault()
        isAnswered && history.push(`/poll/${id}`)
    }

    const className = isAnswered ? "answeredQuestion" : "unansweredQuestion"

    return (
        <div onClick={onShowDetails} className={className}>

            <h3>Would you rather:</h3>

            <QuestionOption option="A" text={optionOne.text} selected={isOneSelected} />
            <QuestionOption option="B" text={optionTwo.text} selected={isTowSelected} />

            {!isAnswered && <QuestionVotingPanel id={id} />}

        </div>
    )
}


export default connect(({ authUser, questions }, { id }) => {

    const q = questions[id]
    const isOneSelected = q.optionOne.votes.includes(authUser)
    const isTowSelected = q.optionTwo.votes.includes(authUser)

    return {
        question: q,
        isOneSelected,
        isTowSelected
    }
})(Question)