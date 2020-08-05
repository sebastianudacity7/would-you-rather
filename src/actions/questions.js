import * as QuestionAPI from '../api/api'

export const SET_QUESTIONS = 'SET_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export const setQuestions = (questions) => ({
    type: SET_QUESTIONS,
    questions
})

export const loadQuestionsAsync = () => (dispatch) => {
    return QuestionAPI.getQuestions()
        .then(qs => {
            dispatch(setQuestions(qs))
        })
}

export const addNewQuestion = (question) => ({
    type: ADD_NEW_QUESTION,
    question
})

export const addNewQuestionAsync = (question) => (dispatch) => {
    return QuestionAPI.addNewQuestion(question)
        .then(q => {
            dispatch(addNewQuestion(q))
        })
}

export const addQuestionAnswer = (user, id, answer) => ({
    type: ADD_QUESTION_ANSWER,
    id,
    user,
    answer
})

export const addQuestionVoteAsync = (user, qid, answer) => (dispatch) => {
    dispatch(addQuestionAnswer(user, qid, answer))
    return QuestionAPI.saveQuestionAnswer(user, qid, answer)
}