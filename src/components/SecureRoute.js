import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const SecureRoute = (props) => {

    const location = useLocation()
    const { authUser } = props

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