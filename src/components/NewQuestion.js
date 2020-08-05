import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import NewQuestionOption from './NewQuestionOption'
import { addNewQuestionAsync } from '../actions/questions'

const NewQuestion = ({ dispatch, authUser }) => {

    const [optionOne, setOptionOne] = useState("")
    const [optionTwo, setOptionTwo] = useState("")
    const [isBusy, setIsBusy] = useState(false)

    const onOptionChanged = (e, setOption) => {
        e.preventDefault()
        setOption(e.target.value)
    }

    const history = useHistory()

    const onSubmitNewQuestion = (e) => {
        e.preventDefault()

        setIsBusy(true)

        dispatch(addNewQuestionAsync({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authUser
        }))
            .finally(() => {
                setIsBusy(false)
            })
            .then(() => {
                history.replace("/")
            })
    }

    const isSubmitDisabled = () => !optionOne || !optionTwo || isBusy

    return (
        <div>
            <form>
                <h3>Would You Rather?</h3>
                <div>
                    <NewQuestionOption
                        isRadOnly={isBusy}
                        label="A"
                        value={optionOne}
                        onChange={e => onOptionChanged(e, setOptionOne)} />
                </div>
                <div>
                    <NewQuestionOption
                        isRadOnly={isBusy}
                        label="B"
                        value={optionTwo}
                        onChange={e => onOptionChanged(e, setOptionTwo)} />
                </div>
                <button disabled={isSubmitDisabled()} onClick={onSubmitNewQuestion}>Submit</button>
            </form>
        </div>
    )
}


export default connect(({ authUser }) => ({
    authUser
}))(NewQuestion)