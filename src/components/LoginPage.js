import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthUser } from '../actions/authUser'

const LoginPage = ({ dispatch, users }) => {

    const [selectedUser, setSelectedUser] = useState("");

    useEffect(() => {
        setSelectedUser(users[0]?.name)
    }, [users]);

    const onUserSelected = (e) => {
        e.preventDefault()
        setSelectedUser(e.target.value)
    }

    const history = useHistory();
    const location = useLocation();

    const onLogIn = (e) => {
        e.preventDefault()
        dispatch(setAuthUser(selectedUser))

        const redirectTo = location.state?.from ?? "/"
        history.replace(redirectTo)
    }

    const isLoginDisabled = () => selectedUser === ""

    return (
        <div>
            <form>
                <div>
                    <select onChange={onUserSelected} value={selectedUser}  >
                        {users.map(({id,name}) => <option key={id} value={name} >{name}</option>)}
                    </select>
                </div>
                <button onClick={onLogIn} disabled={isLoginDisabled()}>Login</button>
            </form>
        </div>
    )
}

export default connect(({ users }) => ({
    users: Object.values(users)
}))(LoginPage)