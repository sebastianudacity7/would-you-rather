import { SET_USERS } from '../actions/users'
import { ADD_NEW_QUESTION } from '../actions/questions'

import {map} from '../lib/map'

export const users = (state = {}, action) => {
    switch (action.type) {
        case SET_USERS:
            return action.users
        case ADD_NEW_QUESTION:
            return map(state,([id,u]) => {
                const user = action.question.author === id 
                            ? {...u,questions:[...u.questions,action.question.id]}
                            : u
                return [id,user]})
        default:
            return state

    }
}
