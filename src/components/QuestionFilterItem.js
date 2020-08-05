import React from 'react'
import { Link } from 'react-router-dom'

const QuestionFilterItem = ({ path, selected, text, last }) => {

    const fontWeight = selected
        ? 'bold'
        : 'normal'

    return (
        <span>
            <Link to={path} style={{ fontWeight: fontWeight }}>{text}</Link>
            {!last && <span>|</span>}
        </span>
    )
}

export default QuestionFilterItem