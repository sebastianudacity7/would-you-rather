import { ADD_QUESTIONS } from '../actions/questions'

export const questions = (state = {}, action) => {
    switch (action.type) {
        case ADD_QUESTIONS:
            return action.questions
        default:
            return state

    }
}


