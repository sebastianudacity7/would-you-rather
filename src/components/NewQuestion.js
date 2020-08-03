import React from 'react'
import { withSecure } from '../lib/withSecure'

class NewQuestion extends React.Component {

    render = () => {
        return (<div>NewQuestion</div>)
    }

}


export default withSecure(NewQuestion)