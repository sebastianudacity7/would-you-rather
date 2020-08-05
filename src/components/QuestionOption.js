import React from 'react'

const QuestionOption = ({ label, option, showResults }) => {

    const { text, selected, voteCount, votePercent } = option

    return (
        <div>
            <span style={{ fontWeight: 'bold' }}>{label}:</span>
            <span>{text}</span>
            {selected && <span style={{ fontWeight: 'bold' }}> V</span>}

            {showResults && (
                <div>
                    <span>Votes: {voteCount}</span>
                    <span>|</span>
                    <span>Percent: {votePercent}%</span>
                </div>
            )}
        </div>
    )
}


export default QuestionOption
