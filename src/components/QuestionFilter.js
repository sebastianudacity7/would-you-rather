import React from 'react'

import QuestionFilterItem from './QuestionFilterItem'

const QuestionFilter = ({isAnsweredSelected}) => {

    return (
        <div>
            <QuestionFilterItem path="/" selected={!isAnsweredSelected} text="Unanswered" />
            <QuestionFilterItem path="/?filter=answered" selected={isAnsweredSelected} text="Answered" last={true} />
        </div>
    )
}

export default QuestionFilter