import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import QuestionOption from './QuestionOption'
import QuestionVotingOption from './QuestionVotingOption'

import { mapOptions } from '../api/questions'
import { addQuestionVoteAsync } from '../actions/questions'

import { Card} from "@blueprintjs/core";


const Question = ({ id, options, showDetails, authUser, dispatch }) => {

    const history = useHistory();

    const { optionOne, optionTwo, isAnswered } = options
    const showResults = showDetails && isAnswered


    const onShowDetails = (e) => {
        e.preventDefault()
        history.push(`/questions/${id}`)
    }

    const onVoteClick = (e, answer) => {
        e.preventDefault()
        dispatch(addQuestionVoteAsync(authUser, id, answer))
    }

    const qtnClass = showDetails ? "questionDetails" : "question"
    const interactive = showDetails ? false : true

    return (
        <Card onClick={onShowDetails} className={qtnClass} interactive={interactive}>

            <h3>Would You Rather...</h3>

            {isAnswered
                ? (
                    <div>
                        <QuestionOption option={optionOne} showResults={showResults} />
                        <QuestionOption option={optionTwo} showResults={showResults} />
                    </div>
                )
                : (
                    <div>
                        <QuestionVotingOption text={optionOne.text} onClick={e => onVoteClick(e, "optionOne")} />
                        <div>or</div>
                        <QuestionVotingOption text={optionTwo.text} onClick={e => onVoteClick(e, "optionTwo")} />
                    </div>
                )
            }
        </Card>
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