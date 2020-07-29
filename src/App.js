import React from 'react';
import './App.css';

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import LeaderBoard from './components/LeaderBoard'
import MyQuestions from './components/MyQuestions'
import NewQuestion from './components/NewQuestion'
import LoginPage from './components/LoginPage'
import PollPage from './components/PollPage'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <LeaderBoard/>
      <MyQuestions/>
      <NewQuestion/>
      <LoginPage/>
      <PollPage/>
    </div>
  );
}

export default App;
