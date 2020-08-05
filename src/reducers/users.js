import { SET_USERS } from '../actions/users'
import { ADD_NEW_QUESTION, ADD_QUESTION_ANSWER } from '../actions/questions'

import { map } from '../lib/map'

export const users = (state = {}, action) => {
    switch (action.type) {
        case SET_USERS:
            return action.users
        case ADD_NEW_QUESTION:
            return map(state,
                u => action.question.author === u.id,
                u => ({ questions: [...u.questions, action.question.id] })
            )
        case ADD_QUESTION_ANSWER:
            return map(state,
                u => action.user === u.id,
                u => ({ answers: { ...u.answers, [action.id]: action.answer } }))
        default:
            return state

    }
}
