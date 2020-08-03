import React from 'react'
import { useLocation, useHistory} from 'react-router-dom'
import { connect } from 'react-redux'
import {setAuthUser} from '../actions/authUser'

const LoginPage = ({dispatch}) => {

    const history = useHistory();
    const location = useLocation();

    const onLoggedIn = (e) => {
        e.preventDefault()
        dispatch(setAuthUser("sbor"))

        const redirectTo = location.state?.from ? location.state.from : "/"
        history.replace(redirectTo)
    }

    return (<div>LoginPage
        <button onClick={onLoggedIn}>Login</button>
    </div>)
}

export default connect()(LoginPage)