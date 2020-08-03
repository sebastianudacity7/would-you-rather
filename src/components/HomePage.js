import React from 'react'
import { connect } from 'react-redux'
import { withSecure } from '../lib/withSecure'

const HomePage = ({ authUser }) => {
    return (<div>HomePage</div>)
}

const mapStateToProps = ({ authUser }) => ({
    authUser
})

export default withSecure(connect(mapStateToProps)(HomePage))