import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import QuestionOption from './QuestionOption'
import QuestionVotingOption from './QuestionVotingOption'

import { mapOptions } from '../api/questions'
import { addQuestionVoteAsync } from '../actions/questions'


const Question = ({ id, options, showResults, authUser , dispatch}) => {

    const history = useHistory();

    const { optionOne, optionTwo, isAnswered } = options
    showResults = showResults && isAnswered


    const onShowDetails = (e) => {
        e.preventDefault()
        history.push(`/questions/${id}`)
    }

    const onVoteClick = (e, answer) => {
        e.preventDefault()
        dispatch(addQuestionVoteAsync(authUser, id, answer))
    }

    return (
        <div onClick={onShowDetails} className="question">

            <h3>Would You Rather...</h3>

            {isAnswered
                ? (
                    <div>
                        <QuestionOption label="A" option={optionOne} showResults={showResults} />
                        <QuestionOption label="B" option={optionTwo} showResults={showResults} />
                    </div>
                )
                : (
                    <div>
                        <QuestionVotingOption text={optionOne.text} onClick={e => onVoteClick(e,"optionOne")} />
                        <div>or</div>
                        <QuestionVotingOption text={optionTwo.text}  onClick={e => onVoteClick(e,"optionTwo")} />
                    </div>
                )
            }
        </div>
    )
}


export default connect(({ authUser, questions }, { id }) => {

    const q = questions[id]

    return {
        id: id,
        options: mapOptions(q, authUser),
        authUser
    }
})(Question)