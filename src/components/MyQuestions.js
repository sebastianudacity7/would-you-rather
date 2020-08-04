import React from 'react'
import { connect } from 'react-redux'

import QuestionList from './QuestionList'

const MyQuestions = ({questions}) => {
    return (
        <div>
            <QuestionList title="My Questions" questions={questions} />
        </div>)
}


export default connect(({questions, authUser}) => {
    return { 
        questions : Object.values(questions).filter(q => q.author === authUser)
    }
})(MyQuestions)