import React from 'react'
import { connect } from 'react-redux'

import { useLocation } from 'react-router-dom'

import QuestionList from './QuestionList'
import QuestionFilter from './QuestionFilter'

import { isQuestionAnswered } from '../api/questions'

const HomePage = ({ unansweredQuestions, answeredQuestions }) => {

    const location = useLocation()
    const isAnsweredSelected = new URLSearchParams(location.search).get("filter") === "answered";

    return (
        <div>
            <QuestionFilter isAnsweredSelected={isAnsweredSelected} />
            {isAnsweredSelected
                ? <QuestionList
                    questions={answeredQuestions}
                    title="Answered Questions" />
                : <QuestionList
                    questions={unansweredQuestions}
                    title="Unanswered Questions"
                    emptyMessage="There are no more questions to answer" />
            }
        </div>
    )
}

export default connect(({ questions, authUser }) => {

    const unansweredQuestions = []
    const answeredQuestions = []

    Object.values(questions).forEach(q => {
        if (isQuestionAnswered(q, authUser)) {
            answeredQuestions.push(q)
        }
        else {
            unansweredQuestions.push(q)
        }
    })

    return {
        unansweredQuestions,
        answeredQuestions
    }
})(HomePage)