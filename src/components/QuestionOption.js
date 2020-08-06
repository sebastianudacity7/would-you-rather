import React from 'react'
import { Icon } from "@blueprintjs/core";

const QuestionOption = ({ option, showResults }) => {

    const { text, selected, voteCount, votePercent, totalVoteCount } = option

    const optClass = selected ? "votedOption" : "answeredOption"

    return (
        <div>
            <div className={optClass}>
                <span>{text}</span>
                {selected && <Icon icon="saved" className="votedIcon" />}
            </div>


            {showResults && (
                <div>
                    <span>{voteCount} out of {totalVoteCount} votes  ({votePercent}%)</span>
                </div>
            )}
        </div>
    )
}


export default QuestionOption
