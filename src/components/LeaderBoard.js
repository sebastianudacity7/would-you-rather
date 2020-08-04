import React from 'react'
import { connect } from 'react-redux'

import {getScore} from '../api/user'

import UserBadge from './UserBadge'

const LeaderBoard = ({users}) => {
    return (
    <div>
        <h3>Leader board</h3>
            <ul>
             {users.map(u => (<li key={u.id}><UserBadge id={u.id}/></li>))}
            </ul>
        </div>)
}


export default connect(({users}) => ({
    users:Object.values(users).sort((a,b) => (getScore(b) - getScore(a) ))
}))(LeaderBoard)