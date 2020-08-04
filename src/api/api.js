import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

export const getUsers = () => _getUsers()

export const getQuestions = () => _getQuestions()

export const addNewQuestion = (question) => _saveQuestion(question)

export const saveQuestionAnswer = (authedUser, qid, answer) =>
  _saveQuestionAnswer({ authedUser, qid, answer })