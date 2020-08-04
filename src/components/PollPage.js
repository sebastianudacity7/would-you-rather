import React from 'react'
import { connect } from 'react-redux'

import Question from './Question'

const PollPage = ({question}) => {

    if(!question) {
        return (<div>Poll doesn't exist</div>)
    }

    return (
        <div>
            <h3>Poll Results</h3>
            <Question id={question.id}/>
        </div>
    )
}

export default connect(({questions},props) => ({

    question:questions[props.match.params.id]
}))(PollPage)