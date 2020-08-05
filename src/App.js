import React from 'react';


import './App.css'

import { connect } from 'react-redux'

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import LeaderBoard from './components/LeaderBoard'
import MyQuestions from './components/MyQuestions'
import NewQuestion from './components/NewQuestion'
import LoginPage from './components/LoginPage'
import PollPage from './components/PollPage'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import SecureRoute from './components/SecureRoute'

import { loadUsersAsync } from './actions/users'
import { loadQuestionsAsync } from './actions/questions'
import { useEffectOnce } from './lib/useEffectOnce'


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
        <SecureRoute path="/new" component={NewQuestion} />
        <Route path="/login" component={LoginPage} />
        <SecureRoute path="/questions/:id" component={PollPage} />
      </Switch>

    </div>
  );
}

export default connect(({ authUser }) => ({
  authUser
}))(App)
