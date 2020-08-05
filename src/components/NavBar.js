import React from 'react'

import NavBarItem from './NavBarItem'
import CurrentUser from './CurrentUser'


const NavBar = () => {

    return (<div>
        <NavBarItem text="Home" path="/" />
        <NavBarItem text="Leaderboard" path="/leaderboard" />
        <NavBarItem text="My Questions" path="/myquestions" />
        <NavBarItem text="New Question" path="/new" last={true} />
        <CurrentUser/>

    </div>)
}


export default NavBar