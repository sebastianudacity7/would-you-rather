import React from 'react'
import { Tag } from "@blueprintjs/core";

const ScoreTag = ({ score }) => {

    return (
        <Tag round={true}>Score: {score} </Tag>
    )
}

export default ScoreTag