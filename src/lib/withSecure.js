import React from 'react'
import { useLocation } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export const withSecure = (Component) => {

    const Secure = (props) => {

        const location = useLocation()
        const { authUser } = props

        return (
            authUser
                ? <Component  {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: location }
                }} />
        )
    }

    const mapStateToProps = ({ authUser }) => ({
        authUser
    })

    return connect(mapStateToProps)(Secure);
}


