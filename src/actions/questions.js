import * as QuestionAPI from '../api/api'

export const SET_QUESTIONS = 'SET_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'

export const setQuestions = (questions) => ({
    type:SET_QUESTIONS,
    questions 
})

export const loadQuestionsAsync = () => (dispatch) => {
    return QuestionAPI.getQuestions()
        .then(qs => {
            dispatch(setQuestions(qs))
        })
}

export const addNewQuestion = (question) => ({
    type:ADD_NEW_QUESTION,
    question 
})

export const addNewQuestionAsync = (question) => (dispatch) => {
    return QuestionAPI.addNewQuestion(question)
        .then(q => {
            dispatch(addNewQuestion(q))
        })
}