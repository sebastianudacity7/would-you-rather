import React from 'react'
import { connect } from 'react-redux'

const HomePage = ({ authUser }) => {
    return (<div>HomePage</div>)
}

export default connect(({ authUser }) => ({
    authUser
}))(HomePage)