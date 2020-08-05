import React from 'react';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import '../App.css'

import { connect } from 'react-redux'

import NavBar from './NavBar'
import HomePage from './HomePage'
import LeaderBoard from './LeaderBoard'
import MyQuestions from './MyQuestions'
import NewQuestion from './NewQuestion'
import LoginPage from './LoginPage'
import PollPage from './PollPage'
import NotFound from './NotFound'
import SecureRoute from './SecureRoute'

import { loadUsersAsync } from '../actions/users'
import { loadQuestionsAsync } from '../actions/questions'

import { useEffectOnce } from '../lib/useEffectOnce'

const App = ({ authUser, dispatch }) => {

  useEffectOnce(() => {
    dispatch(loadUsersAsync())
    dispatch(loadQuestionsAsync())
  });

  return (
    <div className="App">

      {authUser && <NavBar />}

      <Switch>
        <SecureRoute exact path="/" component={HomePage} />
        <SecureRoute path="/leaderboard" component={LeaderBoard} />
        <SecureRoute path="/myquestions" component={MyQuestions} />
        <SecureRoute path="/add" component={NewQuestion} />
        <Route path="/login" component={LoginPage} />
        <SecureRoute path="/questions/:id" component={PollPage} />
        <SecureRoute path="*" component={NotFound} ></SecureRoute>
      </Switch>

    </div>
  )
}

export default connect(({ authUser }) => ({
  authUser
}))(App)
