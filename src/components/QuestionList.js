import React from 'react'

import Question from './Question'

const QuestionList = ({questions , title}) => {

    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {questions
                .sort((a,b) => (b.timestamp - a.timestamp))
                .map(q => (<li key={q.id}><Question id={q.id}/></li>))}
            </ul>
        </div>
    )
}

export default QuestionList