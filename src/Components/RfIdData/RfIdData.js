import React, {Component} from 'react'
import './RfIdData.css'

class RfIdData extends Component{
    render(){
        return (
            <div className="RfIdData">
                {this.props.rfId}
            </div>
        )
    }
}

export default RfIdData;