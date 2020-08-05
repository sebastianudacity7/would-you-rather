import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import QuestionOption from './QuestionOption'
import QuestionVotingPanel from './QuestionVotingPanel'



const Question = ({ question, isOneSelected, isTowSelected}) => {

    const history = useHistory();

    const { id, optionOne, optionTwo } = question

    const isAnswered = isOneSelected || isTowSelected

    const onShowDetails = (e) => {
        e.preventDefault()
        history.push(`/questions/${id}`)
    }

    return (
        <div onClick={onShowDetails} className="question">



            <h3>Would You Rather?</h3>

            <QuestionOption option="A" text={optionOne.text} selected={isOneSelected} />
            <QuestionOption option="B" text={optionTwo.text} selected={isTowSelected} />

            {!isAnswered && <QuestionVotingPanel id={id} />}

        </div>
    )
}


export default connect(({ authUser, questions, users }, { id }) => {

    const q = questions[id]

    const isOneSelected = q.optionOne.votes.includes(authUser)
    const isTowSelected = q.optionTwo.votes.includes(authUser)

    return {
        question: q,
        isOneSelected,
        isTowSelected
    }
})(Question)