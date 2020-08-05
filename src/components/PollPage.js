import React from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import UserAvatar from './UserAvatar'

const PollPage = ({id,auhtorId}) => {

    if(!id) {
        return (<div>404: Poll doesn't exist</div>)
    }

    return (
        <div>
            <h3>Poll Results</h3>

            <UserAvatar userId={auhtorId}/>
            <Question id={id} showResults={true}/>
        </div>
    )
}

export default connect(({questions},props) => {
    const q = questions[props.match.params.id]
    return {
        id:q?.id,
        auhtorId:q?.author
    }
})(PollPage)