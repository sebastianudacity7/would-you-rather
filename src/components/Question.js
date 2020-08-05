import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import QuestionOption from './QuestionOption'
import QuestionVotingPanel from './QuestionVotingPanel'

import {mapOptions} from '../api/questions'


const Question = ({ id, options, showResults}) => {

    const history = useHistory();

    const {optionOne, optionTwo, isAnswered} = options
    showResults =  showResults && isAnswered
    

    const onShowDetails = (e) => {
        e.preventDefault()
        history.push(`/questions/${id}`)
    }

    return (
        <div onClick={onShowDetails} className="question">

            <h3>Would You Rather?</h3>

            <QuestionOption label="A" option={optionOne}  showResults={showResults} />
            <QuestionOption label="B" option={optionTwo} showResults={showResults} />

            {!isAnswered && <QuestionVotingPanel id={id} />}

        </div>
    )
}


export default connect(({ authUser, questions}, { id}) => {

    const q = questions[id]

    return {
        id: id,
        options:mapOptions(q,authUser)
    }
})(Question)