import {
    SET_QUESTIONS,
    ADD_NEW_QUESTION,
    ADD_QUESTION_ANSWER
} from '../actions/questions'

import { map } from '../lib/map'

export const questions = (state = {}, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return action.questions
        case ADD_NEW_QUESTION:
            return { ...state, [action.question.id]: action.question }
        case ADD_QUESTION_ANSWER:
            return map(state, q => q.id === action.id, q => {
                const answer = q[action.answer]
                return { [action.answer]: { ...answer, votes: [...answer.votes, action.user] } }
            })
        default:
            return state

    }
}


