import React from 'react'
import { connect } from 'react-redux'
import {addQuestionVoteAsync} from '../actions/questions'

const QuestionVotingPanel = ({id,authUser,dispatch}) => {

    const onVoteClick = (e,answer) => {
        e.preventDefault()
        dispatch(addQuestionVoteAsync(authUser,id,answer))

    }

    return (
        <div>
            <button onClick={e => onVoteClick(e,"optionOne")}>Vote A</button>
            <button onClick={e => onVoteClick(e,"optionTwo")}>Vote B</button>
        </div>
    )
}

export default connect(({authUser}) => ({
    authUser
}))(QuestionVotingPanel)