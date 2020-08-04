import React from 'react'

const QuestionOption = ({ text, option }) => {

    return (
        <div><span style={{ fontWeight: 'bold' }}>{option}:</span>{text}</div>
    )
}


export default QuestionOption
