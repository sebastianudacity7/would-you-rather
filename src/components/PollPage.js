import React from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import UserAvatar from './UserAvatar'

const PollPage = ({id,auhtorId,authorName}) => {

    if(!id) {
        return (<div>404: Poll doesn't exist</div>)
    }

    return (
        <div>
            <h3>Question by <span>{authorName}</span></h3>

            <UserAvatar userId={auhtorId}/>
            <Question id={id} showDetails={true}/>
        </div>
    )
}

export default connect(({questions, users},props) => {
    const q = questions[props.match.params.id]

    return {
        id:q?.id,
        auhtorId:q?.author,
        authorName: users[q?.author]?.name
    }
})(PollPage)