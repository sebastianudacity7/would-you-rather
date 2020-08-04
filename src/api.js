import {
    _getUsers,
    _getQuestions,
    _saveQuestion

  } from './_DATA.js'

  export const getUsers = () => _getUsers()

  export const getQuestions = () => _getQuestions()

  export const addNewQuestion = (question) => _saveQuestion(question)
