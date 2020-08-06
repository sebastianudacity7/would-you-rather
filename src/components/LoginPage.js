import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthUser } from '../actions/authUser'

import { Button} from "@blueprintjs/core"

const LoginPage = ({ dispatch, users }) => {

    const [selectedUser, setSelectedUser] = useState("")

    useEffect(() => {
        setSelectedUser(users[0]?.id)
    }, [users]);

    const onUserSelected = (e) => {
        e.preventDefault()
        setSelectedUser(e.target.value)
    }

    const history = useHistory()
    const location = useLocation()

    const onLogIn = (e) => {
        e.preventDefault()
        dispatch(setAuthUser(selectedUser))

        const redirectTo = location.state?.from ?? "/"
        history.replace(redirectTo)
    }

    const isLoginDisabled = () => !selectedUser

    return (
        <div className="loginBox">
            <h3>Welcome to the Would You Rather Game!</h3>
            <div>Please sign in to continue</div>
            
            <form>
                <div>
                    <select onChange={onUserSelected} value={selectedUser}  className="inputBox" >
                        {users.map(({ id, name }) => <option key={id} value={id} >{name}</option>)}
                    </select>
                </div>
                <Button  intent="primary" onClick={onLogIn} disabled={isLoginDisabled()} className="loginBtn">Sign In</Button>
            </form>
        </div>
    )
}

export default connect(({ users }) => ({
    users: Object.values(users)
}))(LoginPage)