import React from 'react'

const QuestionOption = ({ text, option, selected }) => {

    return (
        <div>
            <span style={{ fontWeight: 'bold' }}>{option}:</span>
            <span>{text}</span>
            {selected && <span style={{ fontWeight: 'bold' }}> V</span>}
        </div>
    )
}


export default QuestionOption
