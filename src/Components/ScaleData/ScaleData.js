import React, {Component} from 'react'
import './ScaleData.css'

class ScaleData extends Component{

    render(){
        return (
            <div className="ScaleData">
               {this.props.weight}
            </div>
        )
    }
}

export default ScaleData;