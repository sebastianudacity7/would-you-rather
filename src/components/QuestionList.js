import React from 'react'

import Question from './Question'

const QuestionList = ({questions , title}) => {

    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {questions.map(q => (<li key={q.id}><Question id={q.id}/></li>))}
            </ul>
        </div>
    )
}

export default QuestionList