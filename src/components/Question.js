import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import QuestionOption from './QuestionOption'
import QuestionVotingPanel from './QuestionVotingPanel'

import {isQuestionAnswered} from '../api/questions'

const Question = ({ question , isAnswered}) => {

    const history = useHistory();

    const { id, optionOne, optionTwo } = question

    const onShowDetails = (e) => {
        e.preventDefault()
        isAnswered && history.push(`/poll/${id}`)
    }

    const className = isAnswered ? "answeredQuestion" : "unansweredQuestion"

    return (
        <div onClick={onShowDetails} className={className}>

            <h3>Would you rather:</h3>

            <QuestionOption option="A" text={optionOne.text} />
            <QuestionOption option="B" text={optionTwo.text} />

            {!isAnswered && <QuestionVotingPanel id={id}/>}

        </div>
    )
}


export default connect(({authUser, questions }, { id }) => {

    const question = questions[id]

    return {
        question: question,
        isAnswered:isQuestionAnswered(question,authUser)
    }
})(Question)