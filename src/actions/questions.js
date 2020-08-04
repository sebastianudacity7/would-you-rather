import {getQuestions} from '../api'

export const ADD_QUESTIONS = 'ADD_QUESTIONS'

export const addQuestions = (questions) => ({
    type:ADD_QUESTIONS,
    questions 
})

export const loadQuestionsAsync = () => (dispatch) => {
    return getQuestions()
        .then(qs => {
            dispatch(addQuestions(qs))
        })
}