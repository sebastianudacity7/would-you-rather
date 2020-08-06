import React from 'react'

const NewQuestionOption = ({ label, value, onChange, readOnly }) => {

    return (
        <div>
            <input type="text" placeholder={`Option ${label}`} value={value} onChange={onChange} readOnly={readOnly}></input><span></span>
        </div>
    )
}

export default NewQuestionOption