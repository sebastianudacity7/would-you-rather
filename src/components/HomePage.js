import React from 'react'
import { connect } from 'react-redux'

import QuestionList from './QuestionList'

import {isQuestionAnswered} from '../api/questions'

const HomePage = ({ unasweredQuestions, asweredQuestions }) => {


    return (
        <div>
            <div>
                <QuestionList questions={unasweredQuestions} title="Unaswered Questions" />
            </div>
            <div>
                <QuestionList questions={asweredQuestions} title="Answered Questions" />
            </div>
        </div>)
}

export default connect(({ questions, authUser }) => {

    const unasweredQuestions = []
    const asweredQuestions = []

    Object.values(questions).forEach(q => {
        if (isQuestionAnswered(q,authUser)) {
            asweredQuestions.push(q)
        }
        else {
            unasweredQuestions.push(q)
        }
    })

    return {
        unasweredQuestions,
        asweredQuestions,
        authUser
    }
})(HomePage)