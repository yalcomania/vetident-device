import React, { Component } from 'react'
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
        weight:0,
        rfId:null
    }

    MessageRecievedHandler= (data) => {
        var packetObj=JSON.parse(data);
        if(packetObj.type==="rfId"){
            var rfId=packetObj.payload.rfId;
            this.setState({rfId:rfId})
        }
        else if(packetObj.type==="weight"){
            var weight=(+weight).toFixed(2);
            this.setState({weight:weight})
        }
        
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
                    <RfIdData rfId={this.state.rfId}></RfIdData>
                </Card>
                <WebSocketHelper onMessageRecieved={this.MessageRecievedHandler}></WebSocketHelper>
                <button className="SaveButton">Kaydet</button>
            </div>
        )
    }
}

export default Weighing;