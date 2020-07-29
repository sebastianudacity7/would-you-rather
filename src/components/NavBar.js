import React from 'react'

import NavBarItem from './NavBarItem'


const NavBar = () => {

    return (<div>
        <NavBarItem text="Home" path="/"  />
        <NavBarItem text="Leader Board" path="/leaderboard" />
        <NavBarItem text="My Questions" path="/myquestions" />
        <NavBarItem text="New Question" path="/new" />
        <NavBarItem text="Login" path="/login" last={true} />
    </div>)
}


export default NavBar