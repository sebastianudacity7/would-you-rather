import React from 'react'
import './App.css'

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import LeaderBoard from './components/LeaderBoard'
import MyQuestions from './components/MyQuestions'
import NewQuestion from './components/NewQuestion'
import LoginPage from './components/LoginPage'
import PollPage from './components/PollPage'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Route exact path="/" component={HomePage} /> 
      <Route path="/leaderboard" component={LeaderBoard} /> 
      <Route path="/myquestions" component={MyQuestions} /> 
      <Route path="/new" component={NewQuestion} /> 
      <Route path="/login" component={LoginPage} /> 
      <Route path="/poll/:id" component={PollPage} /> 

    </div>
  );
}

export default App
