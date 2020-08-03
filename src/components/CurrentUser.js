import React from 'react'
import { connect } from 'react-redux'
import {signOutUser} from '../actions/authUser'

const CurrentUser = ({authUser, dispatch}) => {

    const onSignOut = (e) => {
        e.preventDefault()
        dispatch(signOutUser())
    }

    return (
        <span>
            {authUser}
            <button onClick={onSignOut}>Sign out</button>
        </span>
        
    )
}

const mapStateToProps = ({ authUser }) => ({
    authUser
})

export default connect(mapStateToProps)(CurrentUser)