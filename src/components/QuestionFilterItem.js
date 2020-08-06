import React from 'react'
import { Link } from 'react-router-dom'

const QuestionFilterItem = ({ path, selected, text, last }) => {

    const itemClass = selected
        ? "selectedMenuItem"
        : "menuItem"

    return (
        <span>
            <Link to={path} className={itemClass}>{text}</Link>
            {!last && <span className="menuItemDivider">|</span>}
        </span>
    )
}

export default QuestionFilterItem