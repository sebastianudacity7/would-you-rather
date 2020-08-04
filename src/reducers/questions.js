import {
    SET_QUESTIONS,
    ADD_NEW_QUESTION
} from '../actions/questions'

export const questions = (state = {}, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return action.questions
        case ADD_NEW_QUESTION:
            return { ...state, [action.question.id]: action.question }
        default:
            return state

    }
}


