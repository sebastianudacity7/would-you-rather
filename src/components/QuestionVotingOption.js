import React from 'react'
import { Button } from "@blueprintjs/core"


const QuestionVotingOption = ({ text, onClick }) => {

    return (
        <div >
            <Button className="voteButton" onClick={onClick} >{text}</Button>
        </div>
    )
}


export default QuestionVotingOption