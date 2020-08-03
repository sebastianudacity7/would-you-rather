import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const SecureRoute = (props) => {

    const { authUser,location } = props

    return (
        authUser
            ? <Route {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: location }
            }} />
    )
    
}

const mapStateToProps = ({ authUser }) => ({
    authUser
})

export default connect(mapStateToProps)(SecureRoute)