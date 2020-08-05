import React from 'react'

const NewQuestionOption = ({ label, value, onChange, readOnly }) => {

    return (
        <div>
            <span style={{ fontWeight: 'bold' }}>{label}:</span>
            <input type="text" placeholder={`Option ${label}`} value={value} onChange={onChange} readOnly={readOnly}></input>?<span></span>
        </div>
    )
}

export default NewQuestionOption