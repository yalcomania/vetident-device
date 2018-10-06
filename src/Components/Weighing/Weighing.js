import React, { Component, Fragment } from 'react'
import ScaleData from '../ScaleData/ScaleData'
import RfIdData from '../RfIdData/RfIdData'
import WebSocketHelper from '../../Helpers/WebSocketHelper/WebSocketHelper'
import Card from '../../hoc/Card/Card'
import './Weighing.css'

class Weighing extends Component {

    constructor(props) {
        super(props)
        this.refWebSocket = React.createRef();
    }

    state = {
        message: null,
        weight:0
    }

    NewWeightHasComeHandler= (weight) => {

        this.setState({weight:(+weight).toFixed(2)})
    }

    render() {
        return (
            <div>
                <div className="WeighingTitle">
                    <h1>HAYVAN TARTIMI</h1>
                </div>
                <p>{this.state.message}</p>
                <Card title="Tartı">
                    <ScaleData weight={this.state.weight}></ScaleData>
                </Card>
                <Card title="Elektronik Küpe">
                    <RfIdData></RfIdData>
                </Card>
                <WebSocketHelper newWeightHasCome={this.NewWeightHasComeHandler}></WebSocketHelper>
                <button className="SaveButton">Kaydet</button>
            </div>
        )
    }
}

export default Weighing;