import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

    return (<div>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/leaderboard">Leader Board</Link>
        <span>|</span>
        <Link to="/myquestions">My Questions</Link>
        <span>|</span>
        <Link to="/new">New Question</Link>
    </div>)
}


export default NavBar