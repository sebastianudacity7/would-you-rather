import React from 'react'

import Question from './Question'

const QuestionList = ({ questions, title , emptyMessage}) => {

    return (
        <div>
            <h3>{title}</h3>

            { questions.length > 0 
                ? (
                    <ul>
                    {questions
                        .sort((a, b) => (b.timestamp - a.timestamp))
                        .map(q => (<li key={q.id}><Question id={q.id} /></li>))}
                </ul>
                )
                : (<div>{emptyMessage}</div>)

            }


        </div>
    )
}

export default QuestionList