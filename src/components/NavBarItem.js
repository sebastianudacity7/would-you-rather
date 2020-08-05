import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const NavBarItem = ({ text, path,  last }) => {

    const location = useLocation();

    const fontWeight = location.pathname === path 
        ? 'bold'
        : 'normal'


    return (
        <span>
            <Link to={path}><span style={{ fontWeight: fontWeight }}>{text}</span></Link>
            {!last && <span>|</span>}
        </span>
    )
}


export default NavBarItem