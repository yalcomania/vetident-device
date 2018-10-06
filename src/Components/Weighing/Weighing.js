import React, { Component, Fragment } from 'react'
import ScaleData from '../ScaleData/ScaleData'
import RfIdData from '../RfIdData/RfIdData'
import WebSocketHelper from '../../Helpers/WebSocketHelper/WebSocketHelper'

class Weighing extends Component {

    constructor(props) {
        super(props)
        this.refWebSocket = React.createRef();
    }

    state = {
        message: null
    }

   
    render() {
        return (
            <Fragment>
                <p>Weighing</p>
                <p>{this.state.message}</p>
                <ScaleData></ScaleData>
                <RfIdData></RfIdData>
                <WebSocketHelper></WebSocketHelper>
            </Fragment>
        )
    }
}

export default Weighing;