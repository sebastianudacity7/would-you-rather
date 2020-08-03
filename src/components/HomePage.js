import React from 'react'
import { connect } from 'react-redux'

const HomePage = ({ authUser }) => {
    return (<div>HomePage</div>)
}

const mapStateToProps = ({ authUser }) => ({
    authUser
})

export default connect(mapStateToProps)(HomePage)