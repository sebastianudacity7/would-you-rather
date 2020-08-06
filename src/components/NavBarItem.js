import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'



const NavBarItem = ({ text, path, last }) => {

    const location = useLocation()

    const itemClass = location.pathname === path
        ? "selectedMenuItem"
        : "menuItem"

    return (
        <span>
            <Link to={path}><span className={itemClass}>{text}</span></Link>
            {!last && <span className="menuItemDivider">|</span>}
        </span>
    )
}


export default NavBarItem