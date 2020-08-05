import React from 'react'
import { connect } from 'react-redux'

import QuestionList from './QuestionList'

const MyQuestions = ({ questions }) => {
    return (
        <div>
            <QuestionList
                title="My Questions"
                questions={questions}
                emptyMessage="You haven't created any questions yet" />
        </div>
    )
}

export default connect(({ questions, authUser }) => {
    return {
        questions: Object.values(questions).filter(q => q.author === authUser)
    }
})(MyQuestions)