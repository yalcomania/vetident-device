import React, { Component } from 'react'
import ScaleData from '../ScaleData/ScaleData'
import RfIdData from '../RfIdData/RfIdData'
import WebSocketHelper from '../../Helpers/WebSocketHelper/WebSocketHelper'
import Card from '../../hoc/Card/Card'
import './Weighing.css'
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

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
            var weight=(+packetObj.payload.weight).toFixed(2);
            this.setState({weight:weight})
        }
        
    }

    

    AddNewRecordHandler = () => {
        const record={
            date:new Date(),
            rfId:this.state.rfId,
            weight:this.state.weight
        };

        this.props.onRecordAdded(record);
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
                <button onClick={this.AddNewRecordHandler} className="SaveButton">Kaydet</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        records: state.records,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onRecordAdded: (record) => dispatch({type: actionTypes.ADD_HISTORY, record: record})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weighing);