import React from 'react'

const NewQuestionOption = ({ option, value, onChange, readOnly }) => {

    return (
        <div>
            <span style={{ fontWeight: 'bold' }}>{option}:</span>
            <input type="text" placeholder={`Option ${option}`} value={value} onChange={onChange} readOnly={readOnly}></input>
        </div>
    )    
}

export default NewQuestionOption